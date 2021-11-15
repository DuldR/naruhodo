class CreateKanjis < ActiveRecord::Migration[6.1]
  def change

    drop_table :kanjis
    create_table :kanjis do |t|

      t.string :meaning, null: false
      t.integer :stroke_count, null: false

      t.timestamps
    end

    add_index :kanjis, :meaning
  end
end
