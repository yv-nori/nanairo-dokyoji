module User_id
  @var = User.find_by(name: 'nanairo_root').first.id
  if @var ==! nil
    NanairoRoot_ID = @var
  else
    NanairoRoot_ID = 1
  end
  @var = User.find_by(name: 'parti_user').first.id
  if @var ==! nil
    PartiUser_ID = @var
  else
    PartiUser_ID = 2
  end
  @var = User.find_by(name: 'piani_user').first.id
  if @var ==! nil
    PianiUser_ID = @var
  else
    PianiUser_ID = 3
  end
end
