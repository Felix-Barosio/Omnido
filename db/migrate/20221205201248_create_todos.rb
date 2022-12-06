class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :text
      t.string :category
      t.boolean :done

      t.timestamps
    end
  end
end
