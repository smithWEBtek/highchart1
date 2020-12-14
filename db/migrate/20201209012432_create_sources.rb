class CreateSources < ActiveRecord::Migration[6.0]
  def change
    create_table :sources do |t|
      t.string :name
      t.string :url
      t.string :key
      t.text :description
      t.text :notes
      t.timestamps
    end
  end
end
