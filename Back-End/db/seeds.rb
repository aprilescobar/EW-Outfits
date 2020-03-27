# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
p "We seeding..." 
p "it's gonna be legen--" 
p "wait for it..."

wt1 = Top.create(designer: "Nike", name: "1. Black LS Crop", score: 3, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/37e50aa6-176f-438f-ba26-932c113c5770/sportswear-womens-seasonal-top-61Vvln.jpg")
wt2 = Top.create(designer: "Nike", name: "2. Black Sweater", score: 2, img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/295d65f5-34b6-47c9-aa31-6bca29df05ff/sportswear-tech-fleece-womens-1-4-zip-top-bkFmqw.jpg")
wt3 = Top.create(designer: "Nike", name: "3. Black Tube Top", score: 5, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7880c98c-15e3-4d34-9316-78328bf1c6a1/sportswear-jdi-womens-ribbed-top-Vm2D4G.jpg")
wt4 = Top.create(designer: "Nike", name: "4. Black Crop Shirt", score: 1, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oik1m22uxt4hzlqlmrgo/sportswear-swoosh-womens-short-sleeve-mock-top-cwXJsF.jpg")
wt5 = Top.create(designer: "Nike", name: "5. Black/Gray Top", score: 4, img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/eflqg50l6mjv5ewrhyg6/pro-womens-cropped-tank-Wh3b5W.jpg")

mt1 = Top.create(designer: "Nike", name: "26. Nike Pro Warm", score: 1, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/qoz4ctxpzofnv9wgvjuj/pro-warm-mens-long-sleeve-top-Dbk0Vt.jpg")
mt2 = Top.create(designer: "Nike", name: "27. Nike Pro", score: 5, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cqlbhl3d0txkepbdlcpk/pro-mens-tight-fit-long-sleeve-top-N8szFc.jpg")
mt3 = Top.create(designer: "Nike", name: "28. Nike Therma", score: 3, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ixdk3bokxq4aduo7eyhb/therma-mens-fleece-pullover-training-hoodie-1LnNMk.jpg")
mt4 = Top.create(designer: "Nike", name: "29. Nike Therma Repel", score: 2, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/t1bbzz9ri9fk8yjui8p2/therma-repel-mens-1-2-zip-golf-top-hZR66d.jpg")
mt5 = Top.create(designer: "Nike", name: "30. Nike Sportswear JDI Heavyweight", score: 4, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/mmy6cb2zaysd8r500wyo/sportswear-jdi-heavyweight-fleece-crew-62VKzP.jpg")
p "Tops were seeded!"

wb1 = Bottom.create(designer: "Nike", name: "1. White Joggers", score: 5, img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/94f85d6b-f10f-4615-b312-04681ab50924/air-womens-running-pants-HvwH0J.jpg")
wb2 = Bottom.create(designer: "Nike", name: "2. Black Joggers", score: 3, img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b646eb39-c060-4d10-a3a8-50faba38efa9/sportswear-city-ready-womens-fleece-pants-fKBQ3w.jpg")
wb3 = Bottom.create(designer: "Nike", name: "3. Black Leggings", score: 4, img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/vgndz7tptdathva3ggem/sculpt-womens-training-crops-KKmmj3.jpg")
wb4 = Bottom.create(designer: "Nike", name: "4. Gray Leggings", score: 1, img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/ql4cvtnaqcxbh9bgpwjc/pro-womens-tights-qk2nl3.jpg")
wb5 = Bottom.create(designer: "Nike", name: "5. Black Joggers 2.0", score: 2, img_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/blql1btv2lqqzflfgakc/sportswear-icon-clash-pants-5dltLr.jpg")

mb1 = Bottom.create(designer: "Nike", name: "26. Jordan 23 Engineered",score: 3, img_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/3b73a35f-e0c6-455d-b76d-73f1f264bf3c/acg-mens-trail-pants-XzBrwB.jpg")
mb2 = Bottom.create(designer: "Nike", name: "27. Nike Pro",score: 2, img_url: "https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/93125bfa-052b-431b-bd01-9355a50c3c88/sportswear-mens-woven-pants-dc0Qt7.jpg")
mb3 = Bottom.create(designer: "Nike", name: "28. Nike Dri-FIT",score: 5, img_url: "https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/13b38421-cbb6-4cc0-80bf-15e0c7576e26/tech-pack-mens-running-pants-vlRmrC.jpg")
mb4 = Bottom.create(designer: "Nike", name: "29. Nike Dri-FIT Academy",score: 1, img_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ca132686-f24a-4c92-a4ae-9e0d3216b652/jordan-legacy-aj11-pants-fwgXjJ.jpg")
mb5 = Bottom.create(designer: "Nike", name: "30. Jordan Sport DNA",score: 4, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/04b7110a-3aca-43ec-865c-7dd142b3a45f/jordan-sport-dna-mens-cargo-pants-ms7cHJ.jpg")
p "Bottoms were seeded!"

ws1 = Shoe.create(designer: "Nike", name: "1. Black Air Force" , score: 2, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/z1udf3xwzc33vpaytjlz/air-force-1-sage-low-womens-shoe-b0cz8K.jpg")
ws2 = Shoe.create(designer: "Nike", name: "2. Black High Tops" , score: 3, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/xcbaa6yv5o3txajcbcku/jordan-air-latitude-720-womens-shoe-1dBCmr.jpg" )
ws3 = Shoe.create(designer: "Nike", name: "3. White High Tops", score: 1, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/z2dupfxi3sr8o53vtxjp/vandalised-womens-shoe-w817m4.jpg")
ws4 = Shoe.create(designer: "Nike", name: "4. Black/Red Slides", score: 5, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/98ec025b-e2c7-4841-964a-3960a6f38149/benassi-duo-ultra-womens-slide-KyTDpnWq.jpg")
ws5 = Shoe.create(designer: "Nike", name: "5. White Air Force", score: 4, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/acxwowgwxpyawi3ylaqy/air-force-1-07-womens-shoe-KyTwDPGG.jpg")

ms1 = Shoe.create(designer: "Nike", name: "26. Air Jordan 3 Retro SE", score: 3, img_url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-da46a9c8-89d0-4d80-81a2-6a3a6db55128/air-jordan-3-retro-se-mens-shoe-jzW36H.jpg")
ms2 = Shoe.create(designer: "Nike", name: "27. Nike Air Force 1 React", score: 4, img_url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-e17d75fb-c3e5-4ed4-8a18-16eeac824d73/air-force-1-react-mens-shoe-b7HKxL.jpg")
ms3 = Shoe.create(designer: "Nike", name: "28. Nike Air Max 90", score: 5, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wzitsrb4oucx9jukxsmc/air-max-90-mens-shoe-6n3vKB.jpg")
ms4 = Shoe.create(designer: "Nike", name: "29. Nike Blazer Mid Premium", score: 2, img_url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-3157c57c-e7f7-47a9-9726-e2a00cdcd35a/blazer-mid-premium-mens-shoe-JWQfgd.jpg")
ms5 = Shoe.create(designer: "Nike", name: "30. Nike Air Zoom Pegasus 36 FlyEase", score: 0, img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/39530e3c-2330-48b9-a7a6-72eb0e8c35ae/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg")
p "Shoes were seeded!"

o1 = Outfit.create(name: "Basic", season: "Spring", likes: 8, top_id: 8, bottom_id: 5, shoe_id: 5)
o2 = Outfit.create(name: "Lazy", season: "Fall", likes: 10, top_id: 5, bottom_id: 2, shoe_id: 2)
o3 = Outfit.create(name: "Athlesure", season: "Summer", likes: 7, top_id: 6, bottom_id: 9, shoe_id: 8)
p "Outfits were seeded"

c1 = Comment.create(name:"Sam", text: "wutttt", outfit_id: 1)
c2 = Comment.create(name:"Sean", text: "cool thread", outfit_id: 2)
c3 = Comment.create(name:"Sekou", text: "basic", outfit_id: 3)
c4 = Comment.create(name:"AJ", text: "cozy", outfit_id: 1)
c5 = Comment.create(name:"JSON", text: "favorite slut outfit", outfit_id: 2)
c6 = Comment.create(name:"Lee", text: "6969 occasion", outfit_id: 3)
c7 = Comment.create(name:"David", text: "s/o to mama Lee for the care package", outfit_id: 1)
c8 = Comment.create(name:"Adit", text: "I made some bread!", outfit_id: 2)
p "Comments were seeded"


p "."
p "."
p "."
p "DAIRY!!!" 
p "(everything was seeded yo)"
