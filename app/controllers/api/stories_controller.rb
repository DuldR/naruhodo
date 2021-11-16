class Api::StoriesController < ApplicationController

    def index
        @stories = Stories.all
        render :index
    end

    def show
        @story = Story.find(params[:id])
        render :show
    end

    private

    def story_params
        params.require(:story).permit(:body, :kanji_id)
    end

end