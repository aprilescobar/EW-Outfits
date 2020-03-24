# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
p "We seeding... it's gonna be legen-- wait for it..."
wt1 = Top.create(designer: "Nike", name: "1. Black LS Crop", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/37e50aa6-176f-438f-ba26-932c113c5770/sportswear-womens-seasonal-top-61Vvln.jpg")
wt2 = Top.create(designer: "Nike", name: "2. Black Sweater", img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/295d65f5-34b6-47c9-aa31-6bca29df05ff/sportswear-tech-fleece-womens-1-4-zip-top-bkFmqw.jpg")
wt3 = Top.create(designer: "Nike", name: "3. Black Tube Top", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7880c98c-15e3-4d34-9316-78328bf1c6a1/sportswear-jdi-womens-ribbed-top-Vm2D4G.jpg")
wt4 = Top.create(designer: "Nike", name: "4. Black Crop Shirt" , img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oik1m22uxt4hzlqlmrgo/sportswear-swoosh-womens-short-sleeve-mock-top-cwXJsF.jpg")
wt5 = Top.create(designer: "Nike", name: "5. Black/Gray Top" , img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/eflqg50l6mjv5ewrhyg6/pro-womens-cropped-tank-Wh3b5W.jpg")
p "Tops were seeded!"
wb1 = Bottom.create(designer: "Nike", name: "1. White Joggers", img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/94f85d6b-f10f-4615-b312-04681ab50924/air-womens-running-pants-HvwH0J.jpg")
wb2 = Bottom.create(designer: "Nike", name: "2. Black Joggers", img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b646eb39-c060-4d10-a3a8-50faba38efa9/sportswear-city-ready-womens-fleece-pants-fKBQ3w.jpg")
wb3 = Bottom.create(designer: "Nike", name: "3. Black Leggings", img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/vgndz7tptdathva3ggem/sculpt-womens-training-crops-KKmmj3.jpg")
wb4 = Bottom.create(designer: "Nike", name: "4. Gray Leggings", img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/ql4cvtnaqcxbh9bgpwjc/pro-womens-tights-qk2nl3.jpg")
wb5 = Bottom.create(designer: "Nike", name: "5. Black Joggers 2.0", img_url: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/ggrquxu8g6s7egwn902u/sportswear-heritage-womens-track-pants-b4TJ9J.jpg")
p "Bottoms were seeded!"
ws1 = Shoe.create(designer: "Nike", name: "1. Black Air Force" , img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/z1udf3xwzc33vpaytjlz/air-force-1-sage-low-womens-shoe-b0cz8K.jpg")
ws2 = Shoe.create(designer: "Nike", name: "2. Black High Tops" , img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/xcbaa6yv5o3txajcbcku/jordan-air-latitude-720-womens-shoe-1dBCmr.jpg" )
ws3 = Shoe.create(designer: "Nike", name: "3. White High Tops", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/z2dupfxi3sr8o53vtxjp/vandalised-womens-shoe-w817m4.jpg")
ws4 = Shoe.create(designer: "Nike", name: "4. Black/Red Slides" , img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/98ec025b-e2c7-4841-964a-3960a6f38149/benassi-duo-ultra-womens-slide-KyTDpnWq.jpg")
ws5 = Shoe.create(designer: "Nike", name: "5. White Air Force", img_url: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/acxwowgwxpyawi3ylaqy/air-force-1-07-womens-shoe-KyTwDPGG.jpg")
p "Shoes were seeded!"
p "DAIRY!!! (everything was seeded yo)"



