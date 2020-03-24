class CreateOutfits < ActiveRecord::Migration[6.0]
  def change
    create_table :outfits do |t|
      t.string :name
      t.string :season
      t.integer :likes
      t.references :top, null: false, foreign_key: true
      t.references :bottom, null: false, foreign_key: true
      t.references :shoe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
