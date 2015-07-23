json.(user, :id, :username)
json.avatar_url asset_path(user.avatar.url(:original))
json.avatar_thumb_url asset_path(user.avatar.url(:thumb))
