@kanjis.each do |kanji|

    json.set! kanji.id do
        json.extract! kanji, :id, :meaning, :stroke_count
    end


end