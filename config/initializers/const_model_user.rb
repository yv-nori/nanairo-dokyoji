module User_id
  @var = User.find_by(name: 'nanairo_root')
  if @var ==! nil
    NanairoRoot_ID = @var.id
  else
    NanairoRoot_ID = 1
  end
  @var = User.find_by(name: 'parti_user')
  if @var ==! nil
    PartiUser_ID = @var.id
  else
    PartiUser_ID = 2
  end
  @var = User.find_by(name: 'piani_user')
  if @var ==! nil
    PianiUser_ID = @var.id
  else
    PianiUser_ID = 3
  end
end
