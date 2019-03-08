class TimetrackingsController < ApplicationController
  before_action :set_timetracking, only: [:show, :edit, :update, :destroy]

  # GET /timetrackings
  # GET /timetrackings.json
  def index
    @timetrackings = Timetracking.all
  end

  # GET /timetrackings/1
  # GET /timetrackings/1.json
  def show
  end

  def distance
    @origin = Geokit::LatLng.new(params[:lat_origin], params[:lng_origin])
    @company = Geokit::LatLng.new(params[:lat], params[:lng])
    @distance = @company.distance_to(@origin).to_i

    if !(@distance <= params[:radius].to_i)
      render json: true
    else
      render json: false
    end
  end

  # GET /timetrackings/new
  def new
    @timetracking = Timetracking.new
  end

  # GET /timetrackings/1/edit
  def edit
  end

  # POST /timetrackings
  # POST /timetrackings.json
  def create
    @timetracking = Timetracking.new(timetracking_params)

    respond_to do |format|
      if @timetracking.save
        format.html { redirect_to @timetracking, notice: 'Timetracking was successfully created.' }
        format.json { render :show, status: :created, location: @timetracking }
      else
        format.html { render :new }
        format.json { render json: @timetracking.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /timetrackings/1
  # PATCH/PUT /timetrackings/1.json
  def update
    respond_to do |format|
      if @timetracking.update(timetracking_params)
        format.html { redirect_to @timetracking, notice: 'Timetracking was successfully updated.' }
        format.json { render :show, status: :ok, location: @timetracking }
      else
        format.html { render :edit }
        format.json { render json: @timetracking.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /timetrackings/1
  # DELETE /timetrackings/1.json
  def destroy
    @timetracking.destroy
    respond_to do |format|
      format.html { redirect_to timetrackings_url, notice: 'Timetracking was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_timetracking
      @timetracking = Timetracking.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def timetracking_params
      params.require(:timetracking).permit(:lat, :lng, :description, :collaborator_id)
    end
end
