class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.decimal :lat
      t.decimal :lon
      t.string :place
      t.integer :number
      t.string :bairro
      t.string :complement
      t.string :state
      t.string :city
      t.string :zip_code

      t.timestamps
    end
  end
end
