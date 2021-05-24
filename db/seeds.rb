# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: 'nanairo_root', password: 'hozdkz8969')
User.create(name: 'parti_user', password: 'houpublic')
User.create(name: 'piani_user', password: 'houpublic')
Category.create(name: 'パルティお知らせ(全体)')
Category.create(name: 'ピアニィお知らせ(全体)')
Category.create(name: 'パルティおたより(パスワード)')
Category.create(name: 'ピアニィおたより(パスワード)')
Category.create(name: 'パルティムービー(パスワード)')
Category.create(name: 'ピアニィムービー(パスワード)')
Category.create(name: 'パルティ書式')
Category.create(name: 'ピアニィ書式')
Category.create(name: '求人票')
Category.create(name: '定款')
Category.create(name: '役員名簿')
Category.create(name: '役員報酬基準')
Category.create(name: 'パルティ自己評価表')
Category.create(name: 'ピアニィ自己評価表')
Category.create(name: 'パルティ募集要項')
Category.create(name: 'ピアニィ募集要項')
