# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_15_023149) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "kanjis", force: :cascade do |t|
    t.string "meaning", null: false
    t.integer "stroke_count", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["meaning"], name: "index_kanjis_on_meaning"
  end

  create_table "primitives", force: :cascade do |t|
    t.string "meaning", null: false
    t.integer "stroke_count", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "kanji_id"
    t.index ["kanji_id"], name: "index_primitives_on_kanji_id"
    t.index ["meaning"], name: "index_primitives_on_meaning"
  end

  create_table "stories", force: :cascade do |t|
    t.integer "kanji_id", null: false
    t.text "body", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["body"], name: "index_stories_on_body"
    t.index ["kanji_id"], name: "index_stories_on_kanji_id"
  end

end
