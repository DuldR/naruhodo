class Api::PrimitivesController < ApplicationController

    def index
        @primitives = Primitive.all
        render :index
    end

    def show
        @primitive = Primitive.find(params[:id])
        render :show
    end

    private

    def primitive_params
        params.require(:primitive).permit(:meaning, :stroke_count)
    end

end