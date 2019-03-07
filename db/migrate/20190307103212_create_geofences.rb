class CreateGeofences < ActiveRecord::Migration[5.2]
  def change
    create_table :geofences do |t|
      t.float :lat
      t.float :lng
      t.integer :radius

      t.timestamps
    end
  end
end
