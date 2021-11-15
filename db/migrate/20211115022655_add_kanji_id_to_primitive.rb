class AddKanjiIdToPrimitive < ActiveRecord::Migration[6.1]
  def change
    add_column :primitives, :kanji_id, :integer
  end
end
