class CreateStories < ActiveRecord::Migration[6.1]
  def change
    create_table :stories do |t|
      t.integer :kanji_id, null: false
      t.text :body, null: false

      t.timestamps
    end
  end
end
