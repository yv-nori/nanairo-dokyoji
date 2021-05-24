module USER
  NanairoRoot_ID = User.where(name: 'nanairo_root').first.id
  PartiUser_ID = User.where(name: 'parti_user').first.id
  PianiUser_ID = User.where(name: 'piani_user').first.id
end
