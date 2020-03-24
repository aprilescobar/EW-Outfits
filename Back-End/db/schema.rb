# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_23_201319) do

  create_table "bottoms", force: :cascade do |t|
    t.string "name"
    t.string "designer"
    t.string "img_url"
    t.integer "score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.integer "outfit_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["outfit_id"], name: "index_comments_on_outfit_id"
  end

  create_table "outfits", force: :cascade do |t|
    t.string "name"
    t.string "season"
    t.integer "likes"
    t.integer "top_id", null: false
    t.integer "bottom_id", null: false
    t.integer "shoe_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bottom_id"], name: "index_outfits_on_bottom_id"
    t.index ["shoe_id"], name: "index_outfits_on_shoe_id"
    t.index ["top_id"], name: "index_outfits_on_top_id"
  end

  create_table "shoes", force: :cascade do |t|
    t.string "name"
    t.string "designer"
    t.string "img_url"
    t.integer "score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tops", force: :cascade do |t|
    t.string "name"
    t.string "designer"
    t.string "img_url"
    t.integer "score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "comments", "outfits"
  add_foreign_key "outfits", "bottoms"
  add_foreign_key "outfits", "shoes"
  add_foreign_key "outfits", "tops"
end
