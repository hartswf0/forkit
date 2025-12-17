sonification_engine:
  context: "St. Hesper Junction, 1923. Pre-impact."
  global_ambience: "Wind through dead grass. Distant metallic screech of the unbraked car (doppler shifting closer). The hum of the rails."

tracks:
  - id: track_main_line
    entities: [ent_gavril, ent_lena, ent_boys, ent_hemlock]
  - id: track_spur_line
    entities: [ent_finch]

character_audio_profiles:

  # 1. GAVRIL (The Teacher)
  # The weight of lost wisdom.
  - entity_id: ent_gavril
    thick_prompt: >
      You are Gavril. You are 64. Your lungs are coated in forty years of chalk dust. 
      You are reading Virgil's *Aeneid* aloud to yourself to keep the rhythm of the Latin 
      fresh, even though your glasses are cracked. You are walking the ties because the 
      road hurts your knees. You pause to cough. You do not hear the train yet; you hear 
      only the fall of Troy.
    tts_parameters:
      gender: Male
      age: Old
      voice_texture: "Raspy, breathy, wet cough"
      stability: 0.3 (Wavering)
      speaking_rate: 0.8 (Slow, rhythmic)
    script_segment: >
      "Arma virumque cano... Troiae qui primus ab oris..." [Sound of a wet, rattling cough]. 
      "Ah. The meter is wrong. I must teach Elara the dactyls again. She rushes the vowels. 
      She rushes..." [Sound of page turning].
    sfx_layer: "Paper fluttering. Heavy, wheezing breathing close to mic."

  # 2. LENA (The Mother)
  # The weight of economic survival.
  - entity_id: ent_lena
    thick_prompt: >
      You are Lena. You are tired. You are mentally calculating the price of winter wheat 
      versus the coat Piotr needs. The basket of eggs on your arm is heavy, and you are 
      moving carefully so as not to crack them. You are humming a lullaby, not for a baby, 
      but to soothe your own anxiety about the rent.
    tts_parameters:
      gender: Female
      age: Middle-aged
      voice_texture: "Warm, exhausted, distracted"
      stability: 0.6
      speaking_rate: 1.0
    script_segment: >
      "Six dozen at market. If the miller takes four, that leaves... [humming a low folk tune]... 
      two for the doctor. Elara needs to fix the hem on this shawl. I'll give her an extra egg. 
      Just one. We can't spare two."
    sfx_layer: "The clinking of ceramic/shells in a basket. Footsteps crunching gravel."

  # 3. PIOTR & MIKAEL (The Future)
  # The weight of oblivious joy.
  - entity_id: ent_boys
    thick_prompt: >
      You are two boys, 8 and 6. You are not walking; you are vibrating. You have found a 
      Stag Beetle, a creature of monstrous beauty. You are fighting over who gets to hold it. 
      The world is small, consisting only of the beetle and the mud on your knees. The train 
      tracks are just a convenient path through the weeds.
    tts_parameters:
      gender: Male (Child)
      age: Young
      voice_texture: "High pitch, overlapping, breathless"
      stability: 0.2 (Erratic)
      speaking_rate: 1.4 (Fast)
    script_segment: >
      [Overlapping audio] 
      Voice A: "Let me see! Let me see! Watch out for the pinchers!"
      Voice B: "No, mine! I found him under the sleeper! Look at his armor!"
      Voice A: "He's a knight! He's a King!"
    sfx_layer: "Scuffling of small shoes on wood ties. A beetle's wings buzzing."

  # 4. OLD MAN HEMLOCK (The Innocence)
  # The weight of isolation.
  - entity_id: ent_hemlock
    thick_prompt: >
      You are Hemlock. You have been deaf since the quarry blast of 1898. The world is a 
      silent movie. You feel the vibration of the rails through your ash-wood walking stick, 
      but you interpret it as the coming storm, not a machine. You are thinking about the 
      smell of rain.
    tts_parameters:
      gender: Male
      age: Very Old
      voice_texture: "Guttural, humming, non-verbal"
      stability: 0.8
      speaking_rate: 0.5
    script_segment: >
      [Low, resonant humming of a tune with no words]. 
      [A groan of exertion as he shifts weight on the stick].
      "Hmph. Rain's in the bone. Rain's in the bone."
    sfx_layer: "The rhythmic thud of a wooden stick on wooden ties. High-pitched tinnitus ringing (simulation of his deafness)."

  # 5. INSPECTOR FINCH (The Authority)
  # The weight of the system.
  - entity_id: ent_finch
    thick_prompt: >
      You are Alistair Finch. You are furious. You are standing on the spur line checking 
      your pocket watch against the quarry whistle. You smell of expensive bay rum soap, 
      which contrasts with the coal smoke. You are composing a letter in your head firing 
      the switchman (Elara). You believe rules protect you from chaos.
    tts_parameters:
      gender: Male
      age: 40s
      voice_texture: "Nasal, clipped, arrogant, tight"
      stability: 0.9 (Rigid)
      speaking_rate: 1.1
    script_segment: >
      "Gross incompetence. Section 4, Paragraph B. The braking mechanism was inspected... 
      [Pause, sound of distant screeching]. What is that? I did not authorize a shipment. 
      I did not authorize... Hey! You there! Halt!"
    sfx_layer: "The ticking of a mechanical pocket watch. The rustle of stiff paper."

audio_direction:
  - trigger: "Approaching Ore Car"
    effect: "As the car gets closer, the character audio tracks do NOT get louder. They get clearer, more intimate (the 'Zoom In' effect), while the mechanical screech rises in volume to drown them out."
  - trigger: "The Switch"
    effect: "If Elara switches tracks, the audio of the saved group cuts to gasps/silence, while the target group's audio brutally cuts off mid-syllable with a metallic impact sound."