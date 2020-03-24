class CreateBottoms < ActiveRecord::Migration[6.0]
  def change
    create_table :bottoms do |t|
      t.string :name
      t.string :designer
      t.string :img_url
      t.integer :score

      t.timestamps
    end
  end
end
