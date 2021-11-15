class AddIndicesToPrimitiveAndStory < ActiveRecord::Migration[6.1]
  def change

    add_index :primitives, :meaning
    add_index :stories, :body
  end
end
