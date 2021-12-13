# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


kanji_list = IO.readlines('/home/garrett/Documents/TestBed/naruhodo/db/kanji_list/kanji.txt')
kanjis = kanji_list[0].split

kanjis.each do |x|
    Kanji.create!(meaning: "test", character: x, stroke_count: 0)
end

# Kanji.create!(meaning: "Power", stroke_count: 2, character: "力")