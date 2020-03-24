class OutfitsController < ApplicationController

    def index
        outfits = Outfit.all
        render json: outfits, except: [:updated_at]
    end

    def show
        outfit = Outfit.find(params[:id])
        render json: outfit, except: [:updated_at]
    end

    def destroy
        outfit = Outfit.find(params[:id])
        outfit.destroy 
    end

end
