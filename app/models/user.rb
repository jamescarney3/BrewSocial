class User < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:username]

  pg_search_scope :search_by_name,
    against: :username,
    using: {
      tsearch: {
        dictionary: "english",
        prefix: true
      }
      # trigram: {}
    }

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_attached_file :avatar, styles: {
    large: "300x300#",
    medium: "150x150#",
    thumb: "60x60#"
  }, default_url: "beer.png"

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  attr_reader :password

  has_many(
    :authored_recipes,
    class_name: "Recipe",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :recipe_adds,
    class_name: "RecipeAdd",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :recipes,
    through: :recipe_adds,
    source: :recipe
  )

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.has_password?(password)
    user
  end

  def self.find_or_create_by_auth_hash(auth_hash)
  user = User.find_by(
          provider: auth_hash[:provider],
          uid: auth_hash[:uid])

  unless user
    user = User.create!(
          provider: auth_hash[:provider],
          uid: auth_hash[:uid],
          username: auth_hash[:info][:nickname],
          password: SecureRandom::urlsafe_base64)
  end

  user
end

  def self.generate_session_token
    new_token = SecureRandom.urlsafe_base64(16)
    old_tokens = User.pluck(:session_token)
    until !old_tokens.include?(new_token)
      new_token = SecureRandom.urlsafe_base64(16)
    end
    new_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password_digest
    BCrypt::Password.new(super)
  end

  def has_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
