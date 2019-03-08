require 'rspec'

RSpec.describe Geofence, type: :model do

  it 'is valid with description' do
    geofence = Geofence.create(:description => "Maceio", :lat => -9.667267, :lng => -35.737493, :radius => 500)
    expect(geofence).to be_valid
  end

  context 'Validates' do
    it { is_expected.to validate_presence_of(:description) }
  end

  context 'Associations' do
    it { is_expected.to belong_to(:collaborator) }
  end
end