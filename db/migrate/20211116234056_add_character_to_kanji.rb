class AddCharacterToKanji < ActiveRecord::Migration[6.1]
  def change

    add_column :kanjis, :character, :string
  end
end
