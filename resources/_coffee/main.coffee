$ ->

  #
  # Random Greeting
  #

  Zepto ($) ->
    $('.cover-title').text (index, current) ->
      greetings = [
        'Aloha'
        'Ciao'
        'Halló'
        'Hei'
        'Hej'
        'Hello'
        'Hey'
        'Howdy'
        'Olá'
      ]

      current.replace /^[A-Za-z]+/, _.sample greetings
