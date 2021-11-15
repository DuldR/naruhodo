class MoreIndices < ActiveRecord::Migration[6.1]
  def change
    add_index :primitives, :kanji_id
    add_index :stories, :kanji_id
  end
end
