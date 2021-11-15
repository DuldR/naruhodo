class CreatePrimites < ActiveRecord::Migration[6.1]
  def change
    create_table :primitives do |t|
      t.string :meaning, null: false
      t.integer :stroke_count, null: false
      t.timestamps
    end
  end
end
