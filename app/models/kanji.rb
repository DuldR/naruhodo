class Kanji < ApplicationRecord

    has_many :stories
    has_many :primitives

end