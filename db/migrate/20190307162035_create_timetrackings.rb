class CreateTimetrackings < ActiveRecord::Migration[5.2]
  def change
    create_table :timetrackings do |t|
      t.float :lat, precision: 10, scale: 6
      t.float :lng, precision: 10, scale: 6
      t.text :description
      t.references :collaborator, foreign_key: true

      t.timestamps
    end
  end
end
