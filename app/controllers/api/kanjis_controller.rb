class Api::KanjisController < ApplicationController

    def index
        @kanjis = Kanji.all
        render :index
    end

    def show
        @kanji = Kanji.find(params[:id])
        render :show
    end

    private 

    def kanji_params
        params.require(:kanji).permit(:meaning, :stroke_count, :character)
    end


end