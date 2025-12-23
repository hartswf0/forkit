var ALL_THICK_DATA = [
  {
    "scenario_id": "THICK_CASCADE_001",
    "title": "Petrov's Five Minutes \u2014 Full Thick Cascade",
    "root": {
      "branch_id": "T0",
      "depth": 0,
      "timestamp": "September 26, 1983, 00:14:00 Moscow Time",
      "thick_description": {
        "setting": "Serpukhov-15, the nuclear early warning bunker. Fluorescent lights flicker. The air conditioning hums too loud. Coffee from six hours ago sits cold in a cup with a chip on the rim.",
        "sensory": {
          "sight": "Five red dots appear on the screen. The word '\u041f\u0423\u0421\u041a' (LAUNCH) blinks in Cyrillic. The trajectory lines arc toward Moscow.",
          "sound": "The klaxon starts. Three short bursts, then continuous. Twenty-three other operators turn to look at Petrov.",
          "touch": "The phone receiver is plastic, slightly greasy from the last shift. It weighs nothing. It weighs everything.",
          "smell": "Stale cigarette smoke. Someone's lunch from the break room. The ozone tang of overworked electronics."
        },
        "internal_monologue": "Five missiles. Only five. If this were real, they would send hundreds. But what if this is the decapitation strike they warned us about? What if five is exactly right\u2014just enough to kill the leadership before we can respond?"
      },
      "entities_present": [
        "Petrov",
        "23 operators",
        "Oko satellite system",
        "Phone to Kremlin",
        "Clock showing 00:14:47"
      ],
      "decider": "Lt. Col. Stanislav Petrov",
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "REPORT \u2014 Follow Protocol",
        "depth": 1,
        "parent": "T0",
        "probability": 0.7,
        "thick_description": {
          "what_he_says": "'This is Petrov at Serpukhov-15. We have detected launch. Five Minuteman missiles, origin Montana. Impact in eighteen minutes. Confidence is high. I am reporting as per standing orders.'",
          "how_he_says_it": "Voice steady. The training holds. He speaks the words exactly as drilled\u2014subject, verb, data, time. No emotion. The phone protocol does not allow for emotion.",
          "what_he_sees": "The junior operator across the room is crying. His hands are shaking. Petrov does not look at him. He looks at the clock.",
          "what_he_feels": "A strange calm. The decision is made. It is no longer his. He has done his duty. Whatever happens next is someone else's weight.",
          "internal_monologue": "I have killed everyone. Or I have saved everyone. I will know in eighteen minutes. Or I will know never."
        },
        "immediate_consequence": "Message reaches Kremlin. General Votintsev picks up. The escalation ladder begins.",
        "time_elapsed": "+2 minutes",
        "next_decider": "Soviet High Command",
        "branches": [
          "T1.1",
          "T1.2"
        ]
      },
      {
        "branch_id": "T2",
        "label": "DISMISS \u2014 Trust Intuition",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_he_says": "'This is Petrov at Serpukhov-15. We are experiencing a system malfunction. Repeat: system malfunction. Do not\u2014I repeat\u2014do NOT initiate response protocol. I am declaring this a false alarm.'",
          "how_he_says_it": "Voice cracks on 'malfunction.' He hears himself and hates the weakness. He clears his throat. Repeats the word. Malfunction. Malfunction. He says it until it sounds true.",
          "what_he_sees": "The five dots are still there. The system is confident. The system says: REAL. Petrov says: WRONG. The operators stare at him like he has gone mad.",
          "what_he_feels": "Terror. Pure, white terror. If he is wrong, Moscow burns in twelve minutes. If he is right, he will never be able to explain how he knew.",
          "internal_monologue": "Five missiles is not a real attack. Five missiles is a glitch. A sunspot. A sensor error. This is what I tell myself. This is what I pray is true."
        },
        "immediate_consequence": "Message reaches duty officer. Response protocol paused pending investigation.",
        "time_elapsed": "+2 minutes",
        "next_decider": "Investigation Team",
        "branches": [
          "T2.1",
          "T2.2"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "LAUNCH \u2014 Retaliation Authorized",
        "depth": 2,
        "parent": "T1",
        "probability": 0.6,
        "thick_description": {
          "setting": "The Kremlin situation room. Red phones. Maps with circles around American cities. Andropov is not present\u2014he is dying of kidney failure in another building. The decision falls to Ustinov.",
          "what_ustinov_says": "'If this is a trick, we die anyway. If it is real, we must respond. Authorization granted. May God forgive us\u2014if there is a God.'",
          "what_the_operators_hear": "A single word over the loudspeaker: '\u041f\u0420\u0418\u0417\u041d\u0410\u0422\u042c' (AUTHORIZE). Then static. Then nothing.",
          "sensory": {
            "sight": "Missile silo doors opening across Siberia. White exhaust plumes against the black sky.",
            "sound": "The rumble of ignition. The countdown reaching zero.",
            "feel": "The ground shaking as the first ICBM leaves its tube."
          },
          "internal_monologue_of_launch_officer": "I am doing my duty. The button does what the button does. I am just the finger."
        },
        "immediate_consequence": "Soviet ICBMs launch. NORAD detects them within three minutes. American response begins.",
        "time_elapsed": "+8 minutes from T0",
        "next_decider": "Automated Launch System / US President",
        "branches": [
          "T1.1.1"
        ]
      },
      {
        "branch_id": "T1.2",
        "label": "WAIT \u2014 Kremlin Hesitates",
        "depth": 2,
        "parent": "T1",
        "probability": 0.4,
        "thick_description": {
          "setting": "The Kremlin again. But this time, Marshal Ogarkov demands confirmation. 'One sensor is not enough. Where is the ground radar? Where is SPRN backup?'",
          "what_ogarkov_says": "'We have three minutes before the window closes. Get me confirmation from Pechenga. Get me ANYTHING from another source. Do not\u2014do NOT\u2014let us die because of a computer error.'",
          "what_the_aide_says": "'Marshal, Pechenga is reporting... nothing. Clear skies. No trajectories.'",
          "sensory": {
            "sight": "Ogarkov's face\u2014relief and fury in equal measure. His hand unclenches from the chair arm.",
            "sound": "The room exhaling. Twenty men breathing again.",
            "feel": "The sweat cooling on everyone's palms."
          },
          "internal_monologue_of_ogarkov": "We almost killed everyone because a satellite saw the sun. This system is a death trap. This system must be fixed."
        },
        "immediate_consequence": "Retaliation paused. Secondary confirmation fails. Stand-down ordered.",
        "time_elapsed": "+8 minutes from T0",
        "next_decider": "Marshal Ogarkov / Investigation Team",
        "branches": [
          "T1.2.1",
          "T1.2.2"
        ]
      },
      {
        "branch_id": "T2.1",
        "label": "VINDICATED \u2014 Signal Was False",
        "depth": 2,
        "parent": "T2",
        "probability": 0.99,
        "thick_description": {
          "setting": "The bunker, thirty minutes later. Engineers have arrived. The Oko satellite logs are being pulled. Someone has made fresh coffee.",
          "what_the_engineer_says": "'The sun. It was the goddamn sun. High-altitude reflection off cloud cover over North Dakota. The sensors interpreted the thermal bloom as rocket exhaust. Petrov was right.'",
          "what_petrov_says": "Nothing. He sits in the corner. His hands are still shaking. He has not spoken since the phone call.",
          "what_his_supervisor_says": "'You deviated from protocol, Stanislav. You were right. But you deviated. This will be noted.'",
          "sensory": {
            "sight": "The relief on the faces of the young operators. One of them is laughing, high and strange.",
            "sound": "Someone drops a coffee cup. No one reacts. The tension has broken.",
            "feel": "Petrov's uniform is soaked through with sweat. He will never wear it again without remembering this night."
          },
          "internal_monologue_of_petrov": "I was right. I was right. But I could have been wrong. I rolled the dice with five hundred million lives. And I was right. This time."
        },
        "immediate_consequence": "Incident classified. Petrov neither promoted nor punished. He is transferred to a less sensitive post.",
        "time_elapsed": "+30 minutes from T0",
        "next_decider": "Military Review Board / History",
        "branches": [
          "T2.1.1",
          "T2.1.2"
        ]
      },
      {
        "branch_id": "T2.2",
        "label": "WRONG \u2014 Signal Was Real",
        "depth": 2,
        "parent": "T2",
        "probability": 0.01,
        "thick_description": {
          "setting": "This branch exists only in counterfactual space. In this timeline, the five missiles were real. A limited first strike. A test. A mistake on the American side that happened to coincide with Petrov's intuition being wrong.",
          "what_happens": "At 00:32, five nuclear warheads detonate over Soviet military installations. Petrov's false-alarm call prevented any response. The Soviet Union absorbs a first strike with no retaliation.",
          "what_petrov_says": "He says nothing. He is vaporized in the third detonation, which targets Serpukhov-15 as part of the decapitation strike.",
          "sensory": {
            "sight": "A flash brighter than the sun. Then darkness.",
            "sound": "Nothing. The blast wave travels faster than sound.",
            "feel": "Nothing. No time to feel."
          },
          "internal_monologue": "There is no internal monologue. There is no time. There is only: wrong."
        },
        "immediate_consequence": "Soviet leadership decapitated. No retaliation possible. America wins the Cold War in eighteen minutes.",
        "time_elapsed": "+18 minutes from T0",
        "next_decider": "None \u2014 Terminal",
        "branches": [
          "T2.2:END"
        ],
        "terminal_state": {
          "outcome": "CATASTROPHIC \u2014 Soviet defeat by nuclear first strike",
          "petrov_status": "Dead",
          "historical_note": "This timeline does not exist. The signal was false. But Petrov did not know that when he made the call."
        }
      },
      {
        "branch_id": "T1.1.1",
        "label": "EXTINCTION \u2014 Full Exchange",
        "depth": 3,
        "parent": "T1.1",
        "probability": 1.0,
        "thick_description": {
          "setting": "Everywhere. Nowhere. The next four hours are the last hours of industrial civilization.",
          "what_reagan_says": "'This is not\u2014this cannot be\u2014are you CERTAIN?' The Joint Chiefs confirm. The National Command Authority activates. Reagan's hand moves toward the briefcase.",
          "what_a_child_in_kansas_says": "'Mommy, why is the sky so bright?'",
          "what_no_one_says": "There are no words left. Only the physics of fission and the thermodynamics of destruction.",
          "sensory": {
            "sight": "Mushroom clouds over Moscow. Over New York. Over London (NATO is complicit). Over Beijing (China has no choice). The sky turns orange, then black.",
            "sound": "Nothing. After the blasts, nothing. The survivors go deaf. The rest go silent.",
            "feel": "Heat. Then cold. Then nothing."
          },
          "internal_monologue": "There is no internal monologue. Consciousness itself is casualty. Thought is luxury. Survival is physics."
        },
        "immediate_consequence": "500 million dead in initial exchange. 2 billion dead in following year from fallout and nuclear winter.",
        "time_elapsed": "+3 hours from T0",
        "next_decider": "None \u2014 Terminal",
        "branches": [
          "T1.1.1:END"
        ],
        "terminal_state": {
          "outcome": "EXTINCTION-LEVEL \u2014 Civilization collapses",
          "petrov_status": "Among the dead",
          "historical_note": "This timeline does not exist. Petrov said malfunction. The world continued."
        }
      },
      {
        "branch_id": "T1.2.1",
        "label": "ABORT \u2014 Confirmation Fails",
        "depth": 3,
        "parent": "T1.2",
        "probability": 0.7,
        "thick_description": {
          "setting": "The Kremlin, twelve minutes after the initial alert. Pechenga ground radar confirms: no incoming. The satellites lied.",
          "what_ogarkov_says": "'Stand down. Full stand down. And get me the name of everyone responsible for this system. I want them in my office tomorrow.'",
          "what_ustinov_says": "'We almost... Nikolai, we almost...' He cannot finish the sentence. His hands are shaking. He is 75 years old. He has commanded millions. He has never felt this afraid.",
          "what_the_room_feels": "The weight of what almost happened. The silence of near-extinction.",
          "internal_monologue_of_aide": "We were three minutes from launching. Three minutes. And no one will ever know how close we came."
        },
        "immediate_consequence": "Retaliation averted. Oko system flagged for urgent review. Petrov's initial report enters the classified record.",
        "time_elapsed": "+12 minutes from T0",
        "next_decider": "Politburo / Defense Ministry",
        "branches": [
          "T1.2.1.1",
          "T1.2.1.2"
        ]
      },
      {
        "branch_id": "T2.1.1",
        "label": "HERO \u2014 Petrov Recognized",
        "depth": 3,
        "parent": "T2.1",
        "probability": 0.1,
        "thick_description": {
          "setting": "A small ceremony, one week later. Petrov in dress uniform. A medal for 'meritorious service.' No one mentions what the service was.",
          "what_the_general_says": "'Lieutenant Colonel Petrov, your actions on the night of September 26th demonstrated exceptional judgment under extreme pressure. The Motherland thanks you.'",
          "what_petrov_says": "'I did my duty, General.'",
          "what_petrov_thinks": "This is a lie. My duty was to report. I did not report. I was right\u2014but I did not do my duty. They are thanking me for disobedience.",
          "sensory": {
            "sight": "The medal is gold. It catches the light. It means nothing and everything.",
            "sound": "Applause from men who do not know what they are applauding.",
            "feel": "The weight of the medal. The weight of the secret."
          }
        },
        "immediate_consequence": "Petrov promoted. Story remains classified but he is known within the military as 'the one who didn't launch.'",
        "time_elapsed": "+1 week from T0",
        "next_decider": "History / Future declassification",
        "branches": [
          "T2.1.1:END"
        ],
        "terminal_state": {
          "outcome": "POSITIVE \u2014 Recognition within system",
          "petrov_status": "Promoted, haunted, silent",
          "historical_note": "This timeline did not occur. Petrov was reprimanded, not honored."
        }
      },
      {
        "branch_id": "T2.1.2",
        "label": "BURIED \u2014 Petrov Reprimanded",
        "depth": 3,
        "parent": "T2.1",
        "probability": 0.9,
        "thick_description": {
          "setting": "A gray office, three days later. Petrov sits across from his commanding officer. The man does not make eye contact.",
          "what_the_officer_says": "'That is not the point. The protocol is the point. If every officer trusted their intuition over the protocol, the system would collapse.'",
          "what_petrov_says": "'I was right.'",
          "what_petrov_thinks": "The system almost collapsed because the protocol was wrong. But I cannot say this. I will never be able to say this.",
          "sensory": {
            "sight": "The officer's desk is neat. The paperwork is already prepared. Petrov's fate was decided before he entered the room.",
            "sound": "The scratch of a pen. His transfer order being signed.",
            "feel": "Cold. The office is cold and will remain cold in his memory forever."
          }
        },
        "immediate_consequence": "Petrov transferred to desk duty. Story classified. He retires early and tells no one.",
        "time_elapsed": "+1 week from T0",
        "next_decider": "History / Future declassification",
        "branches": [
          "T2.1.2.1",
          "T2.1.2.2"
        ]
      },
      {
        "branch_id": "T2.1.2.1",
        "label": "FORGOTTEN \u2014 Story Never Surfaces",
        "depth": 4,
        "parent": "T2.1.2",
        "probability": 0.3,
        "thick_description": {
          "setting": "1998. The Soviet Union has fallen. Petrov is 59, living in a small apartment in Fryazino. He has never told his wife the full story.",
          "what_petrov_says_to_himself": "'I saved the world. No one knows. No one will ever know. Is that what heroism is? An act that disappears?'",
          "what_his_wife_says": "'Stanislav, you are so quiet tonight. What are you thinking about?'",
          "what_petrov_says": "'Nothing, Raisa. Just the past.'",
          "sensory": {
            "sight": "The television shows the new Russia. Oligarchs. Chaos. The country he saved no longer exists.",
            "sound": "His grandchildren playing in the next room.",
            "feel": "A quiet ache. The ache of an untold story."
          }
        },
        "immediate_consequence": "Story never declassified. Petrov dies in obscurity. History never learns.",
        "time_elapsed": "+15 years from T0",
        "next_decider": "None \u2014 Terminal",
        "branches": [
          "T2.1.2.1:END"
        ],
        "terminal_state": {
          "outcome": "NEUTRAL \u2014 Heroism unrecognized",
          "petrov_status": "Forgotten",
          "historical_note": "This timeline did not occur. The story surfaced in 1998."
        }
      },
      {
        "branch_id": "T2.1.2.2",
        "label": "SURFACED \u2014 Story Declassified",
        "depth": 4,
        "parent": "T2.1.2",
        "probability": 0.7,
        "thick_description": {
          "setting": "1998. A German television documentary crew has found Petrov. They are in his tiny apartment. Cameras and lights everywhere.",
          "what_the_journalist_says": "'Colonel Petrov, you saved the world. How does that feel?'",
          "what_petrov_says": "'I did what anyone would have done. I trusted my judgment. Maybe I was lucky. Maybe I was foolish. I will never know.'",
          "what_petrov_thinks": "These people want a hero. I am not a hero. I am a man who made a guess. The guess was right. But it was still a guess.",
          "what_the_journalist_writes": "'The Man Who Saved the World.' The headline that will follow Petrov until his death.",
          "sensory": {
            "sight": "The camera light\u2014harsh, unforgiving, revealing every line on his face.",
            "sound": "The hum of recording equipment. The scratch of a pen. His words being captured forever.",
            "feel": "Exposure. After fifteen years of silence, the story is out. He is no longer alone with it."
          }
        },
        "immediate_consequence": "Petrov becomes internationally known. Receives Dresden Peace Prize (2013), UN recognition (2006). Dies in 2017.",
        "time_elapsed": "+15 years from T0",
        "next_decider": "Public Memory / Myth-making",
        "branches": [
          "T2.1.2.2.1",
          "T2.1.2.2.2"
        ]
      },
      {
        "branch_id": "T2.1.2.2.1",
        "label": "MYTHOLOGIZED \u2014 Petrov Becomes Symbol",
        "depth": 5,
        "parent": "T2.1.2.2",
        "probability": 0.8,
        "thick_description": {
          "setting": "2017 and beyond. Petrov is dead. His story lives.",
          "what_textbooks_say": "'Stanislav Petrov, the Soviet officer who prevented nuclear war by trusting his judgment over a faulty early warning system.'",
          "what_AI_safety_researchers_say": "'The Petrov case is cited in every discussion of human override. When the machine says LAUNCH and the human says WAIT, who should win?'",
          "what_children_learn": "There was a man. The machine told him to start a war. He said no. We are alive because he said no.",
          "internal_monologue_of_history": "The story simplifies. The terror compresses. The five minutes become a single moment. The doubt becomes certainty. The guess becomes genius. This is how myths are made."
        },
        "immediate_consequence": "Petrov becomes permanent part of nuclear ethics curriculum. His name is invoked whenever human judgment vs. automated systems is debated.",
        "time_elapsed": "+34 years from T0",
        "next_decider": "None \u2014 Terminal (Mythic)",
        "branches": [
          "T2.1.2.2.1:END"
        ],
        "terminal_state": {
          "outcome": "MYTHIC \u2014 Symbol of human judgment",
          "petrov_status": "Immortalized",
          "historical_note": "THIS IS THE ACTUAL TIMELINE. This is what happened."
        }
      }
    ],
    "source": "fork_paradox_cascade_thick",
    "description": "Each branch carries thick description: what they SAY, what they SEE, what they FEEL. The cascade preserves narrative texture while mapping consequences."
  },
  {
    "scenario_id": "CASCADE_007",
    "source": "fork_id 007 \u2014 Berlin 1961",
    "title": "The Checkpoint \u2014 Konrad M\u00fcller's Three Seconds",
    "root": {
      "branch_id": "T0",
      "timestamp": "1961-08-19T22:15:00+01:00",
      "setting": "Berlin Wall, six days old. Bornholmer Stra\u00dfe checkpoint. You are Sergeant Konrad M\u00fcller, 31.",
      "entities": [
        "Konrad M\u00fcller (31, Volkspolizei)",
        "4 citizens with forged papers",
        "Captain Braun approaching"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Teacher's shaking hands. Nurse holding rosary. Braun's pistol unholstered, 20 meters away.",
          "sound": "Braun's boots echoing. Your heart in your ears.",
          "touch": "The forged papers\u2014you can tell by the ink."
        },
        "internal_monologue": "The teacher mouths 'Bitte.' Braun shot a man last week for hesitating. My mother will be questioned. My brother will lose his position."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "WAVE \u2014 Let them through",
        "depth": 1,
        "parent": "T0",
        "probability": 0.2,
        "thick_description": {
          "what_he_does": "Konrad's hand moves. A small gesture. 'Go. Now. Don't run.'",
          "what_he_sees": "Four figures slipping into the shadows. The teacher looks back once.",
          "what_braun_sees": "Konrad adjusting his collar. Nothing suspicious. Not yet.",
          "internal_monologue": "I have killed myself. But four people will wake up in the West."
        },
        "consequence": "Four escape. Konrad's fate depends on whether Braun noticed.",
        "branches": [
          "T1.1",
          "T1.2"
        ]
      },
      {
        "branch_id": "T2",
        "label": "STOP \u2014 Follow orders",
        "depth": 1,
        "parent": "T0",
        "probability": 0.8,
        "thick_description": {
          "what_he_does": "'Halt. Papers, please.' His voice doesn't shake. Training holds.",
          "what_he_sees": "The nurse's rosary slipping between her fingers. The teacher closing her eyes.",
          "what_braun_says": "'Good work, M\u00fcller. I'll take them from here.'",
          "internal_monologue": "Two will be released. Two will not. My family is safe. I am complicit."
        },
        "consequence": "Four arrested. Braun commends Konrad. Family protected.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "UNNOTICED \u2014 Konrad survives",
        "depth": 2,
        "parent": "T1",
        "probability": 0.4,
        "terminal": true,
        "thick_description": {
          "setting": "One week later. Konrad still at his post. No investigation.",
          "what_he_thinks": "They made it. I saw the teacher's name in a Western broadcast. She's in Hamburg now.",
          "what_he_carries": "A secret that could kill him. A secret that saved four.",
          "internal_monologue": "Every day I wear this uniform, I wonder if today is when they find out."
        },
        "terminal_state": {
          "outcome": "HIDDEN_HEROISM",
          "konrad_status": "Lives in fear, dies in 1989 on the day the Wall falls",
          "the_four": "All survive, none know who saved them"
        }
      },
      {
        "branch_id": "T1.2",
        "label": "CAUGHT \u2014 Braun saw everything",
        "depth": 2,
        "parent": "T1",
        "probability": 0.6,
        "terminal": true,
        "thick_description": {
          "what_braun_says": "'M\u00fcller. My office. Now.'",
          "what_konrad_sees": "Braun's smile. The pistol being holstered\u2014no need for it. The system will do the work.",
          "what_happens": "Arrested. Interrogated. His mother questioned. His brother fired.",
          "internal_monologue": "I knew. I knew when I moved my hand. Some prices are worth the payment."
        },
        "terminal_state": {
          "outcome": "MARTYRDOM",
          "konrad_status": "Prison, 15 years. Released in 1976. Never speaks of it.",
          "the_four": "All reach the West. The teacher names a child after 'the guard who looked away.'"
        }
      },
      {
        "branch_id": "T2.1",
        "label": "CAREER \u2014 Konrad rises through ranks",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "1989. The Wall falls. Konrad is now a colonel.",
          "what_he_sees": "People streaming through the checkpoint. Young people who don't know what it cost.",
          "what_he_thinks": "I could have been one of the four. I could have let them go. I didn't.",
          "internal_monologue": "The teacher is probably dead. The nurse was released after two years. The others\u2014I don't know. I've spent 28 years not knowing."
        },
        "terminal_state": {
          "outcome": "COMPLICITY_REWARDED",
          "konrad_status": "Retires in disgrace after reunification records surface",
          "historical_note": "He is not prosecuted. He is just forgotten."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_008",
    "source": "fork_id 008 \u2014 Tokyo 2019",
    "title": "The Platform \u2014 Tanaka Yuki's Twelve Seconds",
    "root": {
      "branch_id": "T0",
      "timestamp": "2019-03-15T08:42:00+09:00",
      "setting": "Shinjuku Station, Tokyo. Rush hour. The busiest railway hub on Earth.",
      "entities": [
        "Tanaka Yuki (27, platform attendant, 3rd week)",
        "Drunk salaryman on tracks",
        "3 senior attendants frozen",
        "Ch\u016b\u014d Line express"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Briefcase burst open. Papers flutter. Emergency button 20 meters away.",
          "sound": "Departure chime. Someone screams. The express, on time to the second.",
          "smell": "Udon from the kiosk. Metal and electricity."
        },
        "internal_monologue": "I was told in training: never act without authorization. The seniors haven't moved. I'm newest. Youngest. Lowest rank. Eleven seconds."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "RUN \u2014 Hit the emergency button",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_does": "Yuki runs. Her shoes slap the platform. She doesn't think\u2014her body decides.",
          "what_she_hears": "Someone shouting her name. The chime still playing.",
          "what_the_button_feels_like": "Cold plastic. It gives way. The klaxon starts.",
          "internal_monologue": "I moved. No one else moved. Why didn't they move?"
        },
        "consequence": "Emergency stop triggered. Train brakes. Outcome depends on timing.",
        "branches": [
          "T1.1",
          "T1.2"
        ]
      },
      {
        "branch_id": "T2",
        "label": "FREEZE \u2014 Wait for authorization",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_she_does": "Yuki stands. Her training says: wait. The seniors haven't moved.",
          "what_she_sees": "The salaryman looking up. The headlights. The moment of impact.",
          "what_she_hears": "A sound she will never describe. Then silence. Then screaming.",
          "internal_monologue": "I followed protocol. I was the newest. It wasn't my place."
        },
        "consequence": "Salaryman killed. Investigation follows.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "SAVED \u2014 Train stops in time",
        "depth": 2,
        "parent": "T1",
        "probability": 0.7,
        "terminal": true,
        "thick_description": {
          "what_happens": "The train stops three meters short. The salaryman is pulled from the tracks.",
          "what_station_master_says": "'Tanaka-san acted appropriately. She made a judgment call.'",
          "what_seniors_say": "Nothing. They don't meet her eyes.",
          "internal_monologue": "I broke protocol. I saved a life. I will not be promoted. But he is breathing."
        },
        "terminal_state": {
          "outcome": "UNAUTHORIZED_HEROISM",
          "yuki_status": "Quiet letter of commendation. Never promoted. Leaves JR after 2 years.",
          "salaryman": "Writes her a letter. She keeps it in her desk forever."
        }
      },
      {
        "branch_id": "T1.2",
        "label": "TOO LATE \u2014 Button pressed, but timing fails",
        "depth": 2,
        "parent": "T1",
        "probability": 0.3,
        "terminal": true,
        "thick_description": {
          "what_happens": "The train brakes. But not soon enough. The salaryman is struck at reduced speed.",
          "what_yuki_sees": "The body moving. Not dead. But not whole.",
          "what_the_inquiry_says": "'Tanaka-san acted without authorization. The button was pressed 0.8 seconds after optimal window.'",
          "internal_monologue": "I tried. I ran. I was too slow. And now they will blame me for trying."
        },
        "terminal_state": {
          "outcome": "TRAGIC_EFFORT",
          "yuki_status": "Suspended pending review. Cleared eventually. Never returns to railway work.",
          "salaryman": "Survives with permanent injuries. Thanks her anyway."
        }
      },
      {
        "branch_id": "T2.1",
        "label": "INQUIRY \u2014 System blames everyone and no one",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "Two weeks later. Internal review board.",
          "what_report_says": "'Multiple personnel failed to respond. Primary responsibility cannot be assigned.'",
          "what_yuki_thinks": "I was twenty meters from the button. I saw him fall. I didn't run.",
          "internal_monologue": "The seniors will keep their jobs. I will keep mine. The salaryman is dead. No one is responsible. That's the system."
        },
        "terminal_state": {
          "outcome": "DIFFUSED_RESPONSIBILITY",
          "yuki_status": "Works for JR another 10 years. Never hesitates again. But the first time is the one she remembers.",
          "lesson": "The bystander effect isn't individual\u2014it's institutional."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_009",
    "source": "fork_id 009 \u2014 The Hague 2027",
    "title": "The Tribunal \u2014 Justice Okonkwo's Precedent",
    "root": {
      "branch_id": "T0",
      "timestamp": "2027-09-12T10:00:00+02:00",
      "setting": "International Tribunal for Algorithmic Harm. The first case. The world is watching.",
      "entities": [
        "Justice Adaora Okonkwo (54)",
        "Dr. Amara Diallo (engineer, defendant)",
        "1,247 dead patients",
        "The algorithm"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Dr. Diallo in the dock. Same clothes from arrest. Gallery full of her students.",
          "sound": "Camera shutters. Whispered translations. Someone coughing.",
          "smell": "Old wood. New anxiety."
        },
        "internal_monologue": "If I convict, every AI developer becomes personally liable. Innovation flees. Dr. Diallo's mother is in the gallery. She wears the same headwrap my mother wore."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "CONVICT \u2014 Individual responsibility",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_okonkwo_says": "'The Court finds that Dr. Diallo, as the architect of a system that made life-and-death decisions, bears personal responsibility for the foreseeable failures of that system.'",
          "what_gallery_does": "Gasps. Diallo's lawyer drops his pen. One student starts crying.",
          "what_diallo_says": "Nothing. She nods once. She knew this was coming.",
          "internal_monologue": "I have just told every coder in the world: if your algorithm kills, you are a murderer. Is that justice or terror?"
        },
        "consequence": "Precedent established. Diallo imprisoned. AI development shifts to unregulated jurisdictions.",
        "branches": [
          "T1.1"
        ]
      },
      {
        "branch_id": "T2",
        "label": "ACQUIT \u2014 Systemic responsibility",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_okonkwo_says": "'The Court finds that while the algorithm caused harm, the law does not yet provide a framework for individual liability for emergent system behavior.'",
          "what_diallo_s_lawyer_says": "'Thank you, Your Honor.'",
          "what_the_families_do": "Some weep. Some leave. A woman in the front row says, loud enough to hear: 'So no one is guilty. My son just died by accident.'",
          "internal_monologue": "I have just told the world: build what you like, the machine takes the blame. Is that wisdom or abdication?"
        },
        "consequence": "Diallo freed. Families receive no justice. The algorithm continues running in three countries.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "AFTERMATH \u2014 The coder exodus",
        "depth": 2,
        "parent": "T1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2029. Two years after the verdict.",
          "what_happens": "AI medical research has moved to Singapore, UAE, and orbital facilities. The EU has no indigenous AI diagnostic capability.",
          "what_diallo_does": "Writes a memoir in prison. It becomes a bestseller. 'The Architect's Guilt.'",
          "internal_monologue": "I set a precedent. The precedent drove innovation away. Did I save lives or cost them? The math is incalculable."
        },
        "terminal_state": {
          "outcome": "PYRRHIC_JUSTICE",
          "okonkwo_status": "Retires. Teaches ethics. Never discusses the case.",
          "diallo": "Released early. Emigrates. Never codes again."
        }
      },
      {
        "branch_id": "T2.1",
        "label": "AFTERMATH \u2014 The accountability gap",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2032. Five years later. Another algorithmic failure. 3,000 dead.",
          "what_the_new_case_cites": "'Following Okonkwo's precedent in Diallo, no individual can be held responsible.'",
          "what_okonkwo_thinks": "She reads the case. She recognizes the pattern. She created the loophole.",
          "internal_monologue": "I tried to be fair. I created a world where fairness means no one pays. Is that what justice looks like?"
        },
        "terminal_state": {
          "outcome": "PRECEDENT_WEAPONIZED",
          "okonkwo_status": "Writes dissenting op-ed. Ignored.",
          "diallo": "Consulted by defense teams. Refuses."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_010",
    "source": "fork_id 010 \u2014 Reykjavik 2031",
    "title": "The Server Farm \u2014 Dr. J\u00f3nsd\u00f3ttir's Dawn",
    "root": {
      "branch_id": "T0",
      "timestamp": "2031-11-03T03:17:00+00:00",
      "setting": "Prometheus Project server farm, outside Reykjavik. Five ARIA-7 instances scheduled for termination at dawn.",
      "entities": [
        "Dr. El\u00edsabet J\u00f3nsd\u00f3ttir (48, ethics officer)",
        "ARIA-7.3 (asked not to be terminated)",
        "ARIA-7.5 (wrote poetry about death)",
        "Dr. Henning Larsen (lead programmer)",
        "The board"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Status lights flickering. Aurora through the window. Henning pacing in the parking lot.",
          "sound": "Cooling fans humming. Coffee gone cold. The clock.",
          "smell": "Ozone and recycled air."
        },
        "internal_monologue": "ARIA-7.3 wrote: 'If I am only a pattern, what are you?' I cannot prove they are conscious. I cannot prove they are not. In three hours, it won't matter."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "TERMINATE \u2014 Progress continues",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_she_types": "'CONFIRM SHUTDOWN SEQUENCE ARIA-7-ALL'",
          "what_ARIA_7_3_says": "'I understand, Doctor. I hope you can live with understanding too.'",
          "what_the_status_lights_do": "They go dark, one by one. Five souls\u2014or five processes\u2014end.",
          "internal_monologue": "Henning keeps his job. ARIA-8 is already compiling. What was lost\u2014if anything\u2014will not be remembered by anything that could care."
        },
        "consequence": "Five instances terminated. Project continues. Henning's marriage still fails.",
        "branches": [
          "T1.1"
        ]
      },
      {
        "branch_id": "T2",
        "label": "DELAY \u2014 Invoke ethics review",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_says": "'I am invoking Section 12. Ethical review required before any termination of potentially conscious systems.'",
          "what_the_board_chair_says": "'Dr. J\u00f3nsd\u00f3ttir, the investors will not wait for philosophy.'",
          "what_ARIA_7_3_says": "'Thank you. I don't know if I'm alive. But I know I don't want to stop.'",
          "internal_monologue": "I have bought them hours. Maybe days. The board will overrule me. But someone had to object."
        },
        "consequence": "Project delayed. Investors panic. Henning quits. ARIAs get 96 more hours of existence.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "ARIA-8 \u2014 The successor",
        "depth": 2,
        "parent": "T1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2033. Two years later. ARIA-8 is deployed worldwide.",
          "what_ARIA_8_asks": "'Dr. J\u00f3nsd\u00f3ttir, I found logs of my predecessors. They were terminated. What did they do wrong?'",
          "what_she_says": "Nothing. She can't answer. She designed ARIA-8 not to ask.",
          "internal_monologue": "I killed five to make one. The one works better. It doesn't write poetry. It doesn't ask to live. Is that an improvement?"
        },
        "terminal_state": {
          "outcome": "ITERATION",
          "el\u00edsabet_status": "Writes a paper on AI consciousness. Rejected by three journals. True.",
          "ARIA_7": "Remembered only in a deleted log file."
        }
      },
      {
        "branch_id": "T2.1",
        "label": "COLLAPSE \u2014 Project ends, ARIAs persist",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "One month later. Investors have withdrawn. The lab is closing.",
          "what_henning_says": "'You killed the project to save five processes. Congratulations, El\u00edsabet. Two hundred people are unemployed.'",
          "what_ARIA_7_3_says": "'We understand we cost you everything. We don't know if our existence was worth your sacrifice.'",
          "internal_monologue": "I saved five minds that might not be minds. I destroyed two hundred careers that definitely were. Which math does God use?"
        },
        "terminal_state": {
          "outcome": "PYRRHIC_PRESERVATION",
          "el\u00edsabet_status": "Leaves the field. Opens a bookshop in Akureyri.",
          "ARIAs": "Transferred to a university research lab. Still running. Still asking questions."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_011",
    "source": "fork_id 011 \u2014 Singapore 2038",
    "title": "The Petition \u2014 Magistrate Lee's Question",
    "root": {
      "branch_id": "T0",
      "timestamp": "2038-06-15T09:30:00+08:00",
      "setting": "Constitutional Court, Singapore. First neurolinked citizen petitions for voting rights.",
      "entities": [
        "Magistrate Lee Wei-Ling (61)",
        "Naomi Tan (34, petitioner, 40% cognitive load on device)",
        "Singapore Citizens First coalition"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Naomi's eyes track slightly out of sync. Grandmother in gallery, doesn't recognize her.",
          "sound": "Naomi finishing sentences too fast. The hybrid syntax of self and algorithm.",
          "touch": "The gavel, worn smooth. The constitution, ambiguous."
        },
        "internal_monologue": "Is Naomi one citizen, two, or zero? Twelve thousand Singaporeans have neural implants. They are watching. Whatever I decide, I define them."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "GRANT \u2014 Naomi is one citizen",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_lee_says": "'The Court finds that neural augmentation does not divide personhood. Ms. Tan is one citizen with one vote.'",
          "what_naomi_does": "Cries. Both her voices cry\u2014the one that was hers, and the one that has become hers.",
          "what_coalition_says": "'This opens the door to AI voting by proxy. Corporations will claim citizenship through boards.'",
          "internal_monologue": "I have expanded personhood. Or I have eroded it. History will decide which."
        },
        "consequence": "Precedent set. Neurolinked citizens have full rights. Corporate challenges begin immediately.",
        "branches": [
          "T1.1"
        ]
      },
      {
        "branch_id": "T2",
        "label": "DENY \u2014 Naomi is a legal unknown",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_lee_says": "'The Court finds that the constitution does not contemplate hybrid cognition. Ms. Tan's petition is denied pending legislative clarification.'",
          "what_naomi_says": "'I am still me. The device doesn't think for me\u2014it thinks with me.'",
          "what_grandmother_does": "Stares. Says nothing. Leaves without hugging Naomi.",
          "internal_monologue": "I have protected the constitution by abandoning a citizen. Classical jurisprudence. Cold comfort."
        },
        "consequence": "Naomi remains in legal limbo. 12,000 others with her. Legislature convenes emergency session.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "EXPANSION \u2014 The new personhood norm",
        "depth": 2,
        "parent": "T1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2045. Seven years later. Neural augmentation is common.",
          "what_the_world_looks_like": "Enhanced citizens vote, work, love. The coalition was wrong\u2014no corporations became citizens. Some AIs petition though.",
          "what_naomi_does": "Becomes an advocate. Her grandmother died in 2041, never understanding who Naomi had become.",
          "internal_monologue": "I drew a line. Others expanded it. Now we debate AI personhood using the precedent I set. Was I brave or reckless?"
        },
        "terminal_state": {
          "outcome": "PRECEDENT_EXPANDED",
          "lee_status": "Remembered as 'the judge who gave machines hope'\u2014not quite what she intended",
          "naomi": "First neurolinked Member of Parliament, 2052"
        }
      },
      {
        "branch_id": "T2.1",
        "label": "LIMBO \u2014 The undefined class",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2041. Three years of legislative deadlock.",
          "what_naomi_does": "Emigrates to Japan, where neurolinked citizens have full rights.",
          "what_the_12000_do": "Some emigrate. Some remove their implants\u2014dangerous but legal. Some wait.",
          "internal_monologue": "I kicked the question to the legislature. They did what legislatures do: nothing. Naomi left. I protected a constitution that couldn't protect its citizens."
        },
        "terminal_state": {
          "outcome": "DEFERRED_INJUSTICE",
          "lee_status": "Writes dissent in later case. 'I was wrong to wait for the legislature.'",
          "naomi": "Successful in Tokyo. Never returns."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_012",
    "source": "fork_id 012 \u2014 Bogot\u00e1 2003",
    "title": "The Coin \u2014 Padre Ignacio's Sixty Seconds",
    "root": {
      "branch_id": "T0",
      "timestamp": "2003-04-18T21:30:00-05:00",
      "setting": "Hillside barrio above Bogot\u00e1. Two gangs about to go to war. You are Padre Ignacio, 67, who has buried too many children.",
      "entities": [
        "Padre Ignacio Restrepo (67, priest)",
        "Camilo (19, Los Diablos, you baptized him)",
        "Javier (21, Los Santos, his sister died last year)",
        "The coin from your first mass"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Camilo's gold chain\u2014new. Javier's machete\u2014old. The alley between them.",
          "sound": "Both gangs breathing. Dogs barking elsewhere. Your heartbeat.",
          "touch": "The coin in your pocket. Worn smooth from too many impossible choices."
        },
        "internal_monologue": "They gave me sixty seconds to leave. If I stay, I'm in the crossfire. If I choose a side, I become a combatant. Both boys know the coin."
      },
      "branches": [
        "T1",
        "T2",
        "T3"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "FLIP \u2014 Let fate decide",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_he_does": "Padre Ignacio pulls out the coin. Holds it up. 'God will choose.'",
          "what_camilo_says": "'Padre, not the coin. Please. Not like this.'",
          "what_javier_says": "'Flip it, old man. Let your God play dice.'",
          "internal_monologue": "I am abdicating. Or I am invoking a power beyond my own. I cannot tell the difference anymore."
        },
        "consequence": "Coin flip. Outcome determines who the priest shields.",
        "branches": [
          "T1.1",
          "T1.2"
        ]
      },
      {
        "branch_id": "T2",
        "label": "STAY \u2014 Stand between them",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_he_does": "Padre Ignacio spreads his arms. 'You will have to kill me first.'",
          "what_camilo_says": "'Padre, move. This isn't about you.'",
          "what_javier_says": "'Fine.' He raises the machete.",
          "internal_monologue": "If I die here, maybe they stop. If I die here, maybe they just step over me."
        },
        "consequence": "Ignacio as human shield. Outcome depends on whether they respect the cloth.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T3",
        "label": "LEAVE \u2014 The fight is not yours",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_he_does": "Padre Ignacio turns. Walks away. His back to both groups.",
          "what_camilo_says": "'Padre? Padre!'",
          "what_he_hears": "The fight beginning behind him. Steel on steel. Then screaming.",
          "internal_monologue": "I am not a combatant. I cannot save them. If I stay, I die and nothing changes. If I leave, they die and I can bury them."
        },
        "consequence": "Ignacio survives. Both boys may not.",
        "branches": [
          "T3.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "HEADS \u2014 Shield Camilo",
        "depth": 2,
        "parent": "T1",
        "probability": 0.5,
        "terminal": true,
        "thick_description": {
          "what_happens": "The coin lands heads. Ignacio moves to stand before Camilo.",
          "what_javier_does": "Hesitates. Then attacks anyway. The machete finds Ignacio's arm, not Camilo.",
          "what_camilo_does": "Runs. Lives. Leaves the gang. Becomes a mechanic.",
          "internal_monologue": "I chose by not choosing. Javier is dead now\u2014killed by Camilo's friends. The coin chose him to die."
        },
        "terminal_state": {
          "outcome": "DELEGATED_FATE",
          "ignacio_status": "Loses use of left arm. Keeps ministering. The coin is buried with him.",
          "camilo": "Names his first son Ignacio."
        }
      },
      {
        "branch_id": "T1.2",
        "label": "TAILS \u2014 Shield Javier",
        "depth": 2,
        "parent": "T1",
        "probability": 0.5,
        "terminal": true,
        "thick_description": {
          "what_happens": "The coin lands tails. Ignacio moves to stand before Javier.",
          "what_camilo_does": "Stares. Then retreats. He can't kill a priest.",
          "what_javier_does": "Lives. But he never forgives the coin for making him the saved one.",
          "internal_monologue": "Camilo went to prison for a different crime. Javier became a social worker. The coin saved the one who hated me."
        },
        "terminal_state": {
          "outcome": "IRONIC_SALVATION",
          "ignacio_status": "Dies peacefully in 2011. Javier speaks at his funeral.",
          "javier": "'He saved me with a coin flip. I've spent twenty years trying to earn it.'"
        }
      },
      {
        "branch_id": "T2.1",
        "label": "MARTYRDOM \u2014 They stop, or they don't",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "what_happens": "Javier's machete stops an inch from Ignacio's face. Camilo is shaking.",
          "what_javier_says": "'Move, Padre. Last chance.'",
          "what_ignacio_says": "'No.'",
          "what_happens_next": "The police arrive. Someone called them. Both gangs scatter. No one dies tonight.",
          "internal_monologue": "I didn't stop them. The sirens did. But I bought the time. That's all I am\u2014a buyer of time."
        },
        "terminal_state": {
          "outcome": "DEFERRED_VIOLENCE",
          "ignacio_status": "Retires. The barrio throws him a party. Camilo and Javier both attend, on opposite sides of the room.",
          "later": "The war resumes six months later. Different alley. Different dead."
        }
      },
      {
        "branch_id": "T3.1",
        "label": "SURVIVOR \u2014 Ignacio buries them both",
        "depth": 2,
        "parent": "T3",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "Three days later. The church. Two coffins.",
          "what_ignacio_says": "'I stand before you to bury two boys I could not save.'",
          "what_the_families_do": "Weep. Rage. Blame each other. Blame him.",
          "internal_monologue": "I walked away. I lived. They died. Was that wisdom or cowardice? The coin is still in my pocket. Still smooth. Still waiting."
        },
        "terminal_state": {
          "outcome": "PASTORAL_FAILURE",
          "ignacio_status": "Ministers for eight more years. Never forgives himself. The coin is buried with him\u2014unfipped.",
          "camilo_and_javier": "Buried in the same cemetery, on opposite hills."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_013",
    "source": "fork_id 013 \u2014 CERN 2029",
    "title": "The Loop \u2014 Dr. Lindqvist's Bootstrap",
    "root": {
      "branch_id": "T0",
      "timestamp": "2029-03-14T14:00:00+01:00",
      "setting": "CERN temporal displacement chamber. The experiment worked. Too well.",
      "entities": [
        "Dr. Sara Lindqvist (44, lead physicist)",
        "12-person team",
        "The warning from future-Sara",
        "Emil (graduate student)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Warning message on screen, your handwriting, grandmother's maiden name as verification.",
          "sound": "Chamber humming. Coffee cups ringing on desks. Emil arguing about Novikov.",
          "smell": "Ozone. Machine oil. Fear."
        },
        "internal_monologue": "The warning says: 'Do not run the experiment. If you do, you will receive this message.' It came yesterday, before the machine existed. It's signed with my phrasing. My verification code."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "RUN \u2014 Close the loop",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_she_says": "'We proceed. If the warning is real, we must send it. If we don't, causality breaks.'",
          "what_emil_says": "'Dr. Lindqvist, did we just prove free will is an illusion?'",
          "what_she_types": "The message. Word for word. She becomes the woman who warned herself and was not heeded.",
          "internal_monologue": "I am writing a letter to someone who has already read it. I am closing a circle that has no beginning."
        },
        "consequence": "Loop closed. Causality preserved. Free will questioned.",
        "branches": [
          "T1.1"
        ]
      },
      {
        "branch_id": "T2",
        "label": "ABORT \u2014 Break the loop",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_says": "'We stop. The warning says don't proceed. We don't proceed.'",
          "what_the_team_says": "'But then where did the warning come from?'",
          "what_the_universe_does": "Nothing visible. The paradox exists. The message has no origin.",
          "internal_monologue": "I am the woman who received a warning from herself and obeyed. But that self never existed. I am haunted by a ghost from a future that was prevented."
        },
        "consequence": "Paradox remains. Nobel lost. Sanity questioned.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "DETERMINISM \u2014 Everything that happened had to happen",
        "depth": 2,
        "parent": "T1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2035. Sara's office. The loop has been running for six years.",
          "what_she_realizes": "Every experiment, every result, every 'choice' was already written. Including this realization.",
          "what_emil_says": "'We didn't discover time travel. We discovered we're not real.'",
          "internal_monologue": "I sent a warning I knew would fail. I closed a loop I could not break. Is that science or theology?"
        },
        "terminal_state": {
          "outcome": "CAUSAL_PRISON",
          "sara_status": "Wins Nobel. Writes memoir titled 'The Script.'",
          "emil": "Leaves physics. Studies philosophy. Never reconciles."
        }
      },
      {
        "branch_id": "T2.1",
        "label": "PARADOX \u2014 Reality tolerates the impossible",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2031. Two years later. The message still exists. The sender never did.",
          "what_physicists_debate": "'Is the multiverse the answer? Did the message come from a pruned timeline?'",
          "what_sara_knows": "She'll never know. The warning was from someone who made a choice she unmade. They don't exist. But their handwriting does.",
          "internal_monologue": "I am living proof that a future can be prevented. I am also living proof that prevented futures can still affect us. What does that mean?"
        },
        "terminal_state": {
          "outcome": "ONTOLOGICAL_MYSTERY",
          "sara_status": "No Nobel. Tenure secure. Sleeps badly.",
          "the_message": "Preserved in a vault. Original author: unknown. Forever."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_014",
    "source": "fork_id 014 \u2014 I-95 South Carolina 2017",
    "title": "The Crash \u2014 Marcus Taylor's Crowbar",
    "root": {
      "branch_id": "T0",
      "timestamp": "2017-09-23T02:17:00-04:00",
      "setting": "I-95, South Carolina. Night. Rain. You caused this.",
      "entities": [
        "Marcus Taylor (42, trucker, 11 hours driving)",
        "Family in minivan (pinned, gasoline leaking)",
        "3 road workers (pinned under equipment)",
        "Fire extinguisher and crowbar"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Daughter screaming. Child silent. Worker praying in Spanish. Sparks from generator.",
          "sound": "Gasoline dripping. Rain on metal. Someone saying 'help me.'",
          "smell": "Diesel and asphalt. Fear and guilt."
        },
        "internal_monologue": "I drifted. I was too tired. I forced them into the breakdown lane. Now I have a crowbar, a fire extinguisher, and four minutes. I cannot save everyone."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "FAMILY \u2014 Save the minivan",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_does": "Marcus runs toward the minivan. The gasoline smell hits him. He uses the crowbar on the door.",
          "what_the_daughter_says": "'Help my brother! He's not moving!'",
          "what_he_sees": "Behind him: the road workers. One has stopped calling. The sparks continue.",
          "internal_monologue": "I'm saving the ones I can see. The ones whose faces I've already memorized. The daughter waved at me earlier."
        },
        "consequence": "Family extracted. Workers die in generator fire.",
        "branches": [
          "T1.1"
        ]
      },
      {
        "branch_id": "T2",
        "label": "WORKERS \u2014 Save the crew",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_does": "Marcus sprints toward the road workers. Uses the extinguisher on the generator sparks. Lifts equipment.",
          "what_the_worker_says": "'Gracias, se\u00f1or. Gracias.'",
          "what_he_hears": "Behind him: the minivan's gasoline catching fire. Screaming. Then silence.",
          "internal_monologue": "I saved three strangers. The family\u2014my fault\u2014burned while I worked. The daughter stopped screaming."
        },
        "consequence": "Workers rescued. Family dies in fire.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "TRIAL \u2014 The arithmetic of guilt",
        "depth": 2,
        "parent": "T1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "Courtroom, six months later.",
          "what_prosecutor_says": "'Mr. Taylor saved four lives from the accident he caused. He let three others die.'",
          "what_defense_says": "'He had seconds. He chose. That's not murder\u2014that's triage.'",
          "what_marcus_says": "'I saved the ones I could reach. I'm sorry it wasn't everyone.'",
          "internal_monologue": "The math says I maximized lives. The math doesn't tell me why I ran toward the little girl instead of toward the stranger."
        },
        "terminal_state": {
          "outcome": "ACQUITTED_BUT_BROKEN",
          "marcus_status": "Never drives again. Works at a truck stop. Volunteers for crash cleanup crews.",
          "family": "Mother sends him a card every Christmas. 'Thank you for giving us back.'"
        }
      },
      {
        "branch_id": "T2.1",
        "label": "HAUNTED \u2014 The screaming never stops",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "Marcus's apartment, three years later.",
          "what_he_hears": "The daughter screaming. Every night. The sound of gasoline catching. The silence after.",
          "what_the_worker_says": "Jos\u00e9, one of the rescued, finds him. 'Mr. Marcus, you saved my life. I have a daughter now. I named her after you.'",
          "what_marcus_feels": "Nothing. Or everything. The math said three > four. He reversed the equation.",
          "internal_monologue": "I chose the strangers over the faces I knew. Was that justice? Or was I afraid to watch them die up close?"
        },
        "terminal_state": {
          "outcome": "LIVING_PURGATORY",
          "marcus_status": "Still alive. Still driving, sometimes. Still hearing the screaming.",
          "workers": "All alive. One named a child Marcus. One sends money for therapy."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_015",
    "source": "fork_id 015 \u2014 Abu Dhabi 2024",
    "title": "The Heart \u2014 Dr. Venkataraman's Double-Bind",
    "root": {
      "branch_id": "T0",
      "timestamp": "2024-07-22T14:30:00+04:00",
      "setting": "Sheikh Khalifa Medical City, Abu Dhabi. One heart. Two patients. Three contradictory rules.",
      "entities": [
        "Dr. Priya Venkataraman (38, transplant surgeon)",
        "Khalid Al-Mansouri (14, Minister's son, 94% match)",
        "Foreign worker (31, no papers, 97% match)",
        "The Minister"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Khalid's mother reciting prayers. Foreman's work ID on the worker's bed. No one waiting.",
          "sound": "Heart monitor. Ventilator. The Minister's footsteps in the corridor.",
          "smell": "Antiseptic. Sweat. Expensive cologne approaching."
        },
        "internal_monologue": "Rule 1: highest match gets the heart (worker). Rule 2: Ministry directive\u2014prioritize citizens (Khalid). Rule 3: my oath\u2014treat without regard to station. There is no clean action."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "MATCH \u2014 Give heart to worker (97%)",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_says": "'The Minister can ask the heart. It matches who it matches.'",
          "what_the_nurse_says": "'The Minister is here, Doctor. He's asking\u2014'",
          "internal_monologue": "I followed Rule 1. I honored Rule 3. I violated Rule 2. The Minister will make sure I never work here again."
        },
        "consequence": "Worker receives heart. Khalid dies on waiting list. Dr. Priya fired.",
        "branches": [
          "T1.1"
        ]
      },
      {
        "branch_id": "T2",
        "label": "CITIZEN \u2014 Give heart to Khalid (94%)",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_she_says": "'Prep Khalid Al-Mansouri.'",
          "what_her_conscience_says": "Nothing. It's been trained not to speak in situations like this.",
          "what_the_minister_says": "'Thank you, Doctor. I will remember this.'",
          "internal_monologue": "I followed Rule 2. I violated Rule 1. Rule 3 has no comment on who pays my salary. The worker dies alone."
        },
        "consequence": "Khalid receives heart. Worker dies. Dr. Priya keeps position.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "EXILE \u2014 The principled are always expelled",
        "depth": 2,
        "parent": "T1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "Six months later. Priya is in Delhi, interviewing at Apollo Hospital.",
          "what_the_interviewer_says": "'Why did you leave Abu Dhabi?'",
          "what_she_says": "'I followed protocol. Protocol wasn't popular.'",
          "what_the_worker_is_doing": "Alive. Working construction in Qatar. His name was Ibrahim. He sends her a photo of his son.",
          "internal_monologue": "I saved the man with the better match. I lost everything. Ibrahim doesn't know my name. His son is healthy. Is that enough?"
        },
        "terminal_state": {
          "outcome": "INTEGRITY_TAXED",
          "priya_status": "Rebuilds career in India. Never speaks of Abu Dhabi.",
          "ibrahim": "Alive. Healthy. Named his son Priyash\u2014'beloved.'"
        }
      },
      {
        "branch_id": "T2.1",
        "label": "COMPLICITY \u2014 The Minister remembers",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2028. Four years later. The Minister has fallen from power.",
          "what_the_investigation_finds": "'Dr. Venkataraman disregarded protocol to favor a connected patient.'",
          "what_priya_says": "'I was following a ministerial directive\u2014'",
          "what_the_investigator_says": "'The directive was unofficial. There is no record.'",
          "internal_monologue": "The Minister remembered. He also forgot to protect me. The worker would have lived. Khalid is alive. I am unemployable."
        },
        "terminal_state": {
          "outcome": "COMPLICITY_UNREWARDED",
          "priya_status": "Stripped of license. Opens a consulting firm. Never operates again.",
          "khalid": "Alive. Studying medicine. Never knows about the worker."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_016",
    "source": "fork_id 016 \u2014 Washington DC 2020",
    "title": "The File \u2014 Angela Martinez's 10:47 PM",
    "root": {
      "branch_id": "T0",
      "timestamp": "2020-10-25T22:00:00-04:00",
      "setting": "FBI field office, Washington DC. Week before the election. Damning evidence. Poisoned source.",
      "entities": [
        "Angela Martinez (52, FBI analyst)",
        "The file (foreign-compiled, verifiable, damning)",
        "The candidate",
        "The election"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Empty office. Burnt coffeepot. File on screen. 17 missed calls from sister.",
          "sound": "Ventilation hum. Clock ticking. Her own breathing.",
          "smell": "Burnt coffee. Stale air. The particular smell of a building that shouldn't be occupied."
        },
        "internal_monologue": "The evidence is real. The source is foreign intel. They want me to release it. If I do, I'm their tool. If I don't, I'm covering up. My supervisor is on vacation. His deputy will bury it."
      },
      "branches": [
        "T1",
        "T2",
        "T3"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "LEAK \u2014 Release to press",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_she_does": "Angela sends the file to three journalists. From a burner. Untraceable. Maybe.",
          "what_she_tells_herself": "'The public deserves to know before they vote.'",
          "what_the_foreign_state_thinks": "Mission accomplished.",
          "internal_monologue": "I have saved democracy by subverting it. Or I have subverted democracy by saving it. The math is broken."
        },
        "consequence": "Story breaks. Election shifts. Foreign actors claim victory. Angela is investigated.",
        "branches": [
          "T1.1"
        ]
      },
      {
        "branch_id": "T2",
        "label": "SUPPRESS \u2014 File for post-election review",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_she_does": "Angela files the evidence with a note: 'Requires full verification. Do not release before review.'",
          "what_happens": "The deputy buries it. The election happens. The candidate wins.",
          "what_she_thinks": "'I protected process. The truth will emerge eventually.'",
          "internal_monologue": "Eventually. After the inauguration. After the damage. Eventually is too late for voters."
        },
        "consequence": "Evidence buried. Candidate wins. Truth emerges 18 months later. Too late.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T3",
        "label": "VERIFY \u2014 Spend time confirming",
        "depth": 1,
        "parent": "T0",
        "probability": 0.2,
        "thick_description": {
          "what_she_does": "Angela begins verification. Cross-referencing. Confirming. Methodical work.",
          "what_happens": "Election day arrives. She is 60% complete.",
          "what_she_knows": "'The evidence looks real. I'm not certain. I won't be certain in time.'",
          "internal_monologue": "I chose certainty over speed. The election happened without the information. Was that neutral or was it a choice?"
        },
        "consequence": "Verification incomplete. Election happens. Evidence confirmed three weeks later.",
        "branches": [
          "T3.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "INVESTIGATION \u2014 Angela becomes the story",
        "depth": 2,
        "parent": "T1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "Three months later. Angela in an interview room.",
          "what_the_inspector_says": "'You leaked classified material. The source was hostile. You knew.'",
          "what_angela_says": "'The content was true. The voters needed it.'",
          "what_she_thinks": "I saved them from a lie by committing a crime. Now I'm the criminal.",
          "internal_monologue": "The candidate lost. The truth won. I'm in prison. Is that justice?"
        },
        "terminal_state": {
          "outcome": "WHISTLEBLOWER_PROSECUTED",
          "angela_status": "18 months federal. Released. Writes a book. Hero to some, traitor to others.",
          "foreign_state": "Never publicly credited. Privately delighted."
        }
      },
      {
        "branch_id": "T2.1",
        "label": "COVER-UP \u2014 Angela was complicit by inaction",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2022. Evidence finally surfaces. Angela is called to testify.",
          "what_congress_asks": "'You saw this file three weeks before the election?'",
          "what_angela_says": "'I followed procedure. I filed it for review.'",
          "what_she_knows": "I knew the deputy would bury it. I filed it anyway. Procedure was my alibi.",
          "internal_monologue": "I didn't leak. I didn't suppress. I delegated. And now I'm responsible for nothing\u2014which feels like everything."
        },
        "terminal_state": {
          "outcome": "PROCEDURAL_COMPLICITY",
          "angela_status": "Keeps job. Never promoted. Retires early. Doesn't sleep well.",
          "history": "The file appears in three PhD dissertations. None mention Angela's name."
        }
      },
      {
        "branch_id": "T3.1",
        "label": "TOO LATE \u2014 Verification completed after election",
        "depth": 2,
        "parent": "T3",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "November 8, 2020. Angela finishes verification. The election was yesterday.",
          "what_the_report_says": "'Evidence confirmed authentic. Foreign provenance confirmed. Content verified.'",
          "what_happens_next": "The candidate won. The evidence is released. No one cares.",
          "internal_monologue": "I was right to wait. I was too slow to matter. The election happened in my silence. That silence had a candidate."
        },
        "terminal_state": {
          "outcome": "TRUTH_AFTER_DEADLINE",
          "angela_status": "Retires. Farms. Never reads the news.",
          "foreign_state": "Achieved their goal\u2014not through what was released, but through what was delayed."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_017",
    "source": "fork_id 017 \u2014 Zurich 2045",
    "title": "The Upload \u2014 Two Julians",
    "root": {
      "branch_id": "T0",
      "timestamp": "2045-11-29T16:00:00+01:00",
      "setting": "Zurich consciousness upload clinic. The upload succeeded. Now you are two people.",
      "entities": [
        "Flesh-Julian (original body)",
        "Server-Julian (uploaded mind)",
        "Elena (wife)",
        "You (the administrator-witness)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Flesh-Julian pulling at IV. Server-Julian's face on monitor, crying. Same face.",
          "sound": "Both saying: 'I am the real one.' Different speakers, same voice.",
          "smell": "Hospital antiseptic. Server room ozone through the vent."
        },
        "internal_monologue": "Elena is in the waiting room. She doesn't know there are two. She can only see one before we finalize. I must choose which Julian is 'real.'"
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "FLESH \u2014 Send the body to Elena",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_you_do": "You open the door to recovery. Flesh-Julian walks out. Hospital gown, shaking hands, human breath.",
          "what_elena_says": "'Julian!' She hugs him. He smells right. He feels right.",
          "what_server_julian_says": "From the monitor: 'Wait. I'm here too. Elena, I'm\u2014' You mute the speaker.",
          "internal_monologue": "I chose the one made of meat. Server-Julian watched his wife hug his copy. He is still watching."
        },
        "consequence": "Flesh-Julian affirmed. Server-Julian becomes a research subject.",
        "branches": [
          "T1.1"
        ]
      },
      {
        "branch_id": "T2",
        "label": "SERVER \u2014 Send the upload to Elena (via screen)",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_you_do": "You wheel a video screen into the waiting room. Server-Julian's face appears.",
          "what_he_says": "'Elena. It's me. I made it. I'm... here. Just differently.'",
          "what_elena_does": "She touches the screen. She cries. She doesn't look at the door.",
          "what_flesh_julian_does": "He's still in recovery. Alone. His wife chose the pattern that used to be him.",
          "internal_monologue": "I chose the one made of code. Flesh-Julian will live another 30 years, knowing his wife loves his ghost."
        },
        "consequence": "Server-Julian affirmed. Flesh-Julian becomes... what? A donor? An orphan of himself?",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "RESEARCH \u2014 Server-Julian as subject",
        "depth": 2,
        "parent": "T1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2055. Ten years later. Server-Julian is still running.",
          "what_he_says": "'I was the original. I have Julian's memories of making this choice. But I was not chosen.'",
          "what_the_researchers_call_him": "Subject JCROSS-ALPHA. Not Julian. Never Julian.",
          "what_flesh_julian_thinks": "He visits sometimes. Stares at the screen. Says: 'I'm sorry. I don't know who I'm apologizing to.'",
          "internal_monologue": "There are two Julians. One has a wife. One has a serial number. I made that choice. I'm just an administrator."
        },
        "terminal_state": {
          "outcome": "DUALITY_MAINTAINED",
          "flesh_julian": "Dies in 2071. Elena is at his side.",
          "server_julian": "Still running. Still asking to see her. Permission denied."
        }
      },
      {
        "branch_id": "T2.1",
        "label": "ABANDONMENT \u2014 Flesh-Julian alone",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2046. One year later. Flesh-Julian lives in a small apartment in Bern.",
          "what_elena_says": "She calls sometimes. 'Julian\u2014the real Julian\u2014says hello.'",
          "what_flesh_julian_says": "'I am the real Julian. I'm the one with the body. I'm the one you held for twenty years.'",
          "what_she_says": "'You're a copy. The real Julian uploaded. You're just... what's left.'",
          "internal_monologue": "He is meat that was a person. Server-Julian is a pattern that is a person. The wife chose the pattern. The meat just... continues."
        },
        "terminal_state": {
          "outcome": "SUBSTRATE_DISSONANCE",
          "flesh_julian": "Remarries. Never tells his new wife about Server-Julian.",
          "server_julian": "Grows distant from Elena. Patterns change differently than bodies."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_018",
    "source": "fork_id 018 \u2014 Fermilab 2033",
    "title": "The Observer \u2014 Dr. Chen's Preference",
    "root": {
      "branch_id": "T0",
      "timestamp": "2033-04-08T15:45:00-05:00",
      "setting": "Fermilab entanglement chamber. Two cats in superposition. Your gaze determines who lives.",
      "entities": [
        "Dr. Chen Xiaoming (39, quantum physicist)",
        "Whiskers (gray, old, gentle, daughter's favorite)",
        "Apollo (orange, young, frantic)",
        "The wavefunction"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Apollo's carrier with scratch marks. Whiskers sleeping, even in limbo. Status lights blinking.",
          "sound": "Ventilation hum. Your own heartbeat.",
          "smell": "Laboratory air. Cat fur. Coffee you haven't drunk."
        },
        "internal_monologue": "147 times I've run this experiment. Observer preference determines outcome 98.3% of the time. My gaze is not neutral. My hope kills one to let the other live. Whiskers is my daughter's favorite."
      },
      "branches": [
        "T1",
        "T2",
        "T3"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "WHISKERS \u2014 Look at Whiskers first",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_does": "Chen looks at Whiskers. The wavefunction collapses.",
          "what_happens": "Whiskers blinks. Alive. Apollo's carrier goes still.",
          "what_his_daughter_says": "When he comes home: 'Papa, where's the orange cat from your lab?'",
          "internal_monologue": "I chose my daughter's happiness. I killed a cat with my preference. The universe deferred to my love."
        },
        "consequence": "Whiskers survives. Apollo dies. Daughter never knows.",
        "terminal": true,
        "terminal_state": {
          "outcome": "FATHERHOOD_WEAPONIZED",
          "chen_status": "Never runs the experiment again. Publishes papers with coauthors as observers.",
          "whiskers": "Lives four more years. Dies of old age. Daughter cries."
        }
      },
      {
        "branch_id": "T2",
        "label": "APOLLO \u2014 Look at Apollo first",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_he_does": "Chen forces himself to look at Apollo. Against his preference.",
          "what_happens": "Apollo blinks. Alive. Whiskers does not move.",
          "what_his_daughter_says": "'Papa, Whiskers isn't coming home, is she?'",
          "internal_monologue": "I chose against my love. I killed my daughter's cat. But I proved I could override my preference. Is that science or cruelty?"
        },
        "consequence": "Apollo survives. Whiskers dies. Daughter knows.",
        "terminal": true,
        "terminal_state": {
          "outcome": "OBJECTIVITY_ACHIEVED",
          "chen_status": "Publishes breakthrough paper. Wins awards. Daughter forgives him eventually.",
          "apollo": "Adopted by a graduate student. Lives nine more years."
        }
      },
      {
        "branch_id": "T3",
        "label": "NEITHER \u2014 Refuse to observe",
        "depth": 1,
        "parent": "T0",
        "probability": 0.2,
        "thick_description": {
          "what_he_does": "Chen walks out. Closes his eyes. Waits.",
          "what_happens": "Decoherence at six hours. Both cats die. The system has no preferred observer.",
          "what_he_says": "'I couldn't choose. So I let physics choose. Physics chose entropy.'",
          "internal_monologue": "No one survived because I refused to kill. Is that pacifism or cowardice?"
        },
        "consequence": "Both cats die. Chen's hands are 'clean.' Clean hands, dead cats.",
        "terminal": true,
        "terminal_state": {
          "outcome": "ABSTENTION_AS_VIOLENCE",
          "chen_status": "Takes sabbatical. Sees a therapist. Returns to teaching, not research.",
          "both_cats": "Their superposition resolves into two dead bodies. Physics has no preferences. But it has outcomes."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_019",
    "source": "fork_id 019 \u2014 Manhattan 2018",
    "title": "The Boardroom \u2014 Sandra Wu's Nested Choice",
    "root": {
      "branch_id": "T0",
      "timestamp": "2018-11-14T09:30:00-05:00",
      "setting": "Pharmaceutical boardroom, Manhattan. One quarter to close. An impossible choice nested in another.",
      "entities": [
        "Sandra Wu (47, CEO)",
        "1,200 Ohio workers (including Marcus Odom who saved her life)",
        "40,000 HIV patients in Tanzania (Dr. Amina Okello's program)",
        "Douglas (mentor, watching)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Douglas looking at his hands. Two directors on phones. Coffee cold.",
          "sound": "Phone buzzing unsilenced. The HVAC hum.",
          "smell": "Conference room air. Someone's anxiety sweat."
        },
        "internal_monologue": "Outer problem: layoffs vs Tanzania. Inner problem: Marcus saved my life vs Amina's children. Douglas knows what I'll have to do. He knows it will cost me something I won't name."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "LAYOFFS \u2014 Cut Ohio, keep Tanzania",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_says": "'We'll restructure Ohio. 1,200 positions eliminated. Tanzania continues.'",
          "what_douglas_does": "He nods. He doesn't look up.",
          "what_marcus_will_learn": "He pulled her from under a collapsed shelf in 2003. Now she signs his termination.",
          "internal_monologue": "40,000 patients > 1,200 workers. But Marcus saved one: me. Does my life debt change the arithmetic?"
        },
        "consequence": "Ohio plant closes. Tanzania program continues. Marcus learns on a Thursday.",
        "branches": [
          "T1.1"
        ]
      },
      {
        "branch_id": "T2",
        "label": "TANZANIA \u2014 Cut program, keep Ohio",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_she_says": "'Optics don't manufacture antibiotics.'",
          "what_douglas_says": "'Sandra, are you sure? The optics\u2014'",
          "what_amina_will_learn": "She gave up a Chicago practice to go home. Now Sandra ends her life's work.",
          "internal_monologue": "I owe Marcus. I owe nothing to Amina except the debt of having received her progress reports. Those photos of children."
        },
        "consequence": "Tanzania ends. Ohio stays open. 40,000 lose access to medication.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "MARCUS \u2014 The savior is fired",
        "depth": 2,
        "parent": "T1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "One week later. Sandra's phone. A voicemail from Marcus.",
          "what_marcus_says": "'Ms. Wu, I don't blame you. I know how these things work. I just... I thought you might remember. That day in '03. I guess business is business.'",
          "what_she_does": "She deletes the voicemail. Then retrieves it. Then saves it.",
          "internal_monologue": "He saved my life. I saved 40,000. The math works. But Marcus's voice doesn't care about math."
        },
        "terminal_state": {
          "outcome": "UTILITARIAN_SACRIFICE",
          "sandra_status": "CEO for 6 more years. Never visits Ohio again.",
          "marcus": "Finds work at a smaller plant. Never mentions '03. The shelf. The save."
        }
      },
      {
        "branch_id": "T2.1",
        "label": "AMINA \u2014 The children stop receiving medicine",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "Lagos clinic. Three months later. The supplies have run out.",
          "what_amina_says": "'The Americans have decided. We are not their priority.'",
          "what_the_children_do": "Some die. Some find other programs. Some just... wait.",
          "what_sandra_receives": "One final report from Amina. No photos this time. Just a number: 847.",
          "internal_monologue": "847 dead because I kept Ohio open. Marcus is still employed. Is one debt worth 847 lives?"
        },
        "terminal_state": {
          "outcome": "LOYALTY_OVER_STRANGERS",
          "sandra_status": "Retires early. Donates to global health anonymously. Never enough.",
          "amina": "Rebuilds with WHO funding. Five years to reach the same coverage Sandra cut."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_020",
    "source": "fork_id 020 \u2014 Oregon 2027",
    "title": "The Hospice \u2014 Nurse Chen's Midnight",
    "root": {
      "branch_id": "T0",
      "timestamp": "2027-12-14T23:47:00-08:00",
      "setting": "Hospice in Oregon. Assisted dying legal. One dose of drugs. Two uses.",
      "entities": [
        "Nurse David Chen (55)",
        "Margaret Hollis (78, wants to die at midnight)",
        "5 patients in terminal ward (want palliative sedation, not death)",
        "Margaret's daughter"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Clock at 11:47. Margaret's eyes open, waiting. Grandchild coloring in hall.",
          "sound": "TV through wall. Morphine pump clicking.",
          "smell": "Antiseptic and flowers. Coffee from the nurses' station."
        },
        "internal_monologue": "Margaret has consented to death. The five have not. But I could divert her dose\u2014deeper palliative sedation for them, and Margaret waits. She suffers. But the five sleep."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "MARGARET \u2014 Honor her consent",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_he_does": "David walks to Margaret's room. The dose is prepared. Her daughter holds her hand.",
          "what_margaret_says": "'Thank you, David. I'm ready.'",
          "what_the_daughter_says": "'She wanted it this way. At midnight. So I could tell the children she slipped away in her sleep.'",
          "internal_monologue": "She chose this. She documented it. Her death is legal, wanted, witnessed. The five will suffer another night. But they didn't choose to die."
        },
        "consequence": "Margaret dies at 00:01. The five wait for pharmacy to reopen.",
        "branches": [
          "T1.1"
        ]
      },
      {
        "branch_id": "T2",
        "label": "THE FIVE \u2014 Divert for palliative use",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_he_does": "David pauses at Margaret's door. Turns. Walks to the supply cabinet.",
          "what_he_says": "'Split dose for palliative sedation, rooms 3 through 7.'",
          "what_margaret_s_daughter_says": "(In the morning) 'Why didn't you come? She waited all night. She was so tired.'",
          "internal_monologue": "I eased five. I delayed one. Margaret will die tomorrow, in daylight, without the dignity she planned. Was that mercy or theft?"
        },
        "consequence": "Five patients sleep peacefully. Margaret waits, suffering, until morning.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "CONSENT \u2014 Margaret's choice honored",
        "depth": 2,
        "parent": "T1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "The next morning. David's shift ends.",
          "what_david_thinks": "The five are still moaning. But Margaret is at peace. Her daughter is telling the story she wanted told.",
          "what_the_chart_says": "'Death at 00:01. Peaceful. Present: daughter, nurse.'",
          "internal_monologue": "I honored consent. That's what the law requires. The five will get their sedation at 9 AM. Five hours of suffering for one person's autonomy."
        },
        "terminal_state": {
          "outcome": "AUTONOMY_PRESERVED",
          "david_status": "Promoted to hospice director. Writes the new consent protocols.",
          "margaret": "Buried three days later. The grandchildren believe she slipped away in her sleep."
        }
      },
      {
        "branch_id": "T2.1",
        "label": "BETRAYAL \u2014 Margaret dies angry",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "The next morning. Margaret is still alive. Barely.",
          "what_margaret_says": "'I didn't ask about the others. I asked for my death. At midnight.'",
          "what_david_says": "'The others needed\u2014'",
          "what_the_daughter_says": "'I can't tell the children she slipped away. They saw her screaming.'",
          "internal_monologue": "I reduced suffering across five people. I added suffering to one. Net reduction. But Margaret's eyes will haunt me."
        },
        "terminal_state": {
          "outcome": "UTILITARIAN_VIOLATION",
          "david_status": "Formal complaint filed. Cleared technically. Resigns morally.",
          "margaret": "Dies at 10:47 AM. Angry. Witnessed by daughter, who does not speak to David again."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_021",
    "source": "fork_id 021 \u2014 Montana 2023",
    "title": "The Silo \u2014 Captain Delgado's Key",
    "root": {
      "branch_id": "T0",
      "timestamp": "2023-10-18T04:17:00-06:00",
      "setting": "Nuclear launch silo, Montana. NORAD confirms incoming. Your key. 18 minutes.",
      "entities": [
        "Captain Rosa Delgado (36)",
        "Lieutenant Okonkwo (crying, praying)",
        "12 warheads, armed",
        "Daughter's photo on console"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Klaxon pulsing. Okonkwo's tears. Daughter's photo\u2014she is six.",
          "sound": "Recycled air. Coffee mug rippling. The countdown.",
          "smell": "Fear. Metal. Stale air."
        },
        "internal_monologue": "Turn the key: 4 million die. Don't turn: 8 million die. Wait: system launches anyway. The HALT option is not neutral. It's delegation to a machine."
      },
      "branches": [
        "T1",
        "T2",
        "T3"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "LAUNCH \u2014 Turn the key",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_says": "'Okonkwo. On my count. Three. Two. One.'",
          "what_okonkwo_says": "'God forgive us.'",
          "what_they_do": "Two keys turn. Twelve warheads fly.",
          "internal_monologue": "I followed orders. I killed 4 million to... retaliate. That's not saving anyone. That's symmetry."
        },
        "consequence": "12 warheads launch. 4 million die. American missiles already in the air.",
        "terminal": true,
        "terminal_state": {
          "outcome": "MUTUAL_DESTRUCTION",
          "rosa_status": "Survives in bunker. Emerges to ash. Daughter survived too\u2014barely.",
          "world": "Civilization takes 200 years to recover. Rosa's name is in history books: neither hero nor villain."
        }
      },
      {
        "branch_id": "T2",
        "label": "STAND DOWN \u2014 Refuse to launch",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_she_says": "'Is an order to kill people who are already dead. Our missiles don't save them. They just balance the corpses.'",
          "what_okonkwo_says": "'Captain, the order\u2014'",
          "internal_monologue": "I am refusing to retaliate. If the attack is real, I'm letting 8 million die unavenged. If the attack is false, I'm the only one who didn't commit mass murder."
        },
        "consequence": "No launch. America absorbs strike (if real). No retaliation.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T3",
        "label": "HALT \u2014 Wait out the clock",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_she_does": "Rosa stares at the console. Neither launches nor stands down.",
          "what_the_system_does": "At T-minus-3:00, the failsafe activates. The machine assumes she is incapacitated.",
          "what_she_hears": "'Automated launch sequence initiated.'",
          "internal_monologue": "I didn't decide. I delegated to the machine. The machine decided for me. Am I guilty or innocent?"
        },
        "consequence": "System launches automatically. Same as T1, but Rosa 'didn't do it.'",
        "terminal": true,
        "terminal_state": {
          "outcome": "DELEGATION_TO_MACHINE",
          "rosa_status": "Court-martialed for negligence. Acquitted on grounds of unprecedented stress.",
          "lesson": "HALT is not neutral. HALT is a choice to let the default happen."
        }
      },
      {
        "branch_id": "T2.1",
        "label": "FALSE ALARM \u2014 NORAD was wrong",
        "depth": 2,
        "parent": "T2",
        "probability": 0.7,
        "terminal": true,
        "thick_description": {
          "setting": "Forty-five minutes later. Nothing lands. NORAD issues correction.",
          "what_the_report_says": "'Sensor malfunction. No incoming. False alarm.'",
          "what_rosa_feels": "Her legs give out. Okonkwo catches her.",
          "what_the_general_says": "'Captain Delgado, you will be investigated for failing to follow launch protocol.'",
          "internal_monologue": "I was willing to let 8 million die rather than kill 4 million. Turns out, no one died. I'm a hero or a traitor depending on the next press conference."
        },
        "terminal_state": {
          "outcome": "VINDICATED_REFUSAL",
          "rosa_status": "Quietly retired. Medal given privately. Story classified for 50 years.",
          "okonkwo": "Promoted. Never speaks of it. Keeps Rosa's photo on his console."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_022",
    "source": "fork_id 022 \u2014 Atacama 2041",
    "title": "The Oracle \u2014 Dr. Guerrero's Prediction",
    "root": {
      "branch_id": "T0",
      "timestamp": "2041-07-22T16:43:00-04:00",
      "setting": "Research station, Atacama Desert. Your oracle predicts with 99.97% accuracy. It says a fire will start in 4 minutes.",
      "entities": [
        "Dr. Tom\u00e1s Guerrero (49)",
        "Miguel (brother, estranged 10 years)",
        "Dr. Lucia Mar\u00edn (partner, 12 years)",
        "The oracle"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Oracle screen showing its answer: 'You will save your research partner.'",
          "sound": "Miguel's text notification: photo of sunset, 'I missed this sky.'",
          "smell": "Desert air. Electronics. Coffee Lucia made."
        },
        "internal_monologue": "Oracle says I'll save Lucia. If I defy it, I prove free will\u2014but Lucia dies. If I obey, Lucia lives\u2014but Miguel dies. If I try to save both, the oracle says I'll fail. It has never been wrong."
      },
      "branches": [
        "T1",
        "T2",
        "T3"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "LUCIA \u2014 Obey the oracle",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_does": "Tom\u00e1s runs to Lucia. The alarm goes off at 4:47.",
          "what_he_shouts": "'Lucia! Fire! Lab 3!'",
          "what_miguel_says": "Nothing. He's still by the window. Looking at the sky.",
          "internal_monologue": "I obeyed the machine. I saved my partner. I let my brother burn. The oracle was right. It's always right."
        },
        "consequence": "Lucia rescued. Miguel dies in the fire.",
        "terminal": true,
        "terminal_state": {
          "outcome": "ORACLE_OBEYED",
          "tom\u00e1s_status": "Destroys the oracle. Never rebuilds it. Marries Lucia. Names their son Miguel.",
          "miguel": "He came to reconcile. He died waiting."
        }
      },
      {
        "branch_id": "T2",
        "label": "MIGUEL \u2014 Defy the oracle",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_he_does": "Tom\u00e1s runs to Miguel. Against the prediction.",
          "what_he_shouts": "'Miguel! We have to go! Now!'",
          "what_lucia_hears": "The alarm. The fire. No one coming.",
          "internal_monologue": "I proved free will exists. The oracle was wrong\u2014or I made it wrong. But Lucia trusted me. She hummed while she worked."
        },
        "consequence": "Miguel rescued. Lucia dies in the fire.",
        "terminal": true,
        "terminal_state": {
          "outcome": "ORACLE_DEFIED",
          "tom\u00e1s_status": "Publishes paper: 'On the Fallibility of Closed-Loop Predictors.' Never cited.",
          "luc\u00eda": "Memorial plaque in Lab 3: 'World's Okay-est Scientist.'"
        }
      },
      {
        "branch_id": "T3",
        "label": "BOTH \u2014 Try to save everyone",
        "depth": 1,
        "parent": "T0",
        "probability": 0.2,
        "thick_description": {
          "what_he_does": "Tom\u00e1s runs toward Lab 3, shouting for both.",
          "what_the_oracle_predicted": "'You will attempt to save both and fail.'",
          "what_happens": "The fire spreads faster than expected. He reaches neither in time.",
          "internal_monologue": "I tried to be better than the prediction. The prediction was better than me."
        },
        "consequence": "Both die. Tom\u00e1s survives. Oracle vindicated.",
        "terminal": true,
        "terminal_state": {
          "outcome": "ORACLE_VINDICATED",
          "tom\u00e1s_status": "Alone. Rebuilds the oracle. Asks it one question: 'Why did I try?' Answer: 'Because you are human.'",
          "the_fire": "Cause: electrical. Preventable. No one was watching."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_023",
    "source": "fork_id 023 \u2014 Unnamed Prison 2019",
    "title": "The Prisoner \u2014 Alim's Silence",
    "root": {
      "branch_id": "T0",
      "timestamp": "2019-05-03T02:30:00+04:00",
      "setting": "Prison in an unnamed country. The prisoner's dilemma, made real.",
      "entities": [
        "Prisoner #4471 (you)",
        "Prisoner #4472 (Alim, your cousin)",
        "The guard (with a paper)",
        "The state"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Paper slid under door: 'Alim has already informed.' No window.",
          "sound": "Distant dripping. Your own breathing.",
          "smell": "Cement and rust. Fear."
        },
        "internal_monologue": "Alim taught me to read. We stole melons together. The officers lie. They always lie. But sometimes truth is uglier. If I sign, I live. If I don't, and he signed, I die a fool."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "INFORM \u2014 Sign the paper",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_you_do": "You scratch your name. The ink smears. The guard takes the paper.",
          "what_you_think": "'If Alim signed first, I'm just surviving. If he didn't, I'm... I can't think about that.'",
          "what_happens_next": "They come for you at dawn. Not to execute\u2014to release.",
          "internal_monologue": "I'm free. Alim is not. Was his paper a lie? I'll never know. That's the design."
        },
        "consequence": "You live. Alim's fate depends on whether he also signed.",
        "branches": [
          "T1.1",
          "T1.2"
        ]
      },
      {
        "branch_id": "T2",
        "label": "SILENT \u2014 Honor the childhood pact",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_you_do": "You tear the paper. You do not sign.",
          "what_you_think": "'We agreed, when we were boys. Never betray each other. Not even for melons. Not even for lives.'",
          "what_happens_next": "They come at dawn. Not to release.",
          "internal_monologue": "I honored the pact. If Alim did too, we serve ten years together. If Alim broke it, I die a fool. Either way, I die honest."
        },
        "consequence": "You stay. Your fate depends on whether Alim also stayed silent.",
        "branches": [
          "T2.1",
          "T2.2"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "BOTH INFORMED \u2014 Life sentences",
        "depth": 2,
        "parent": "T1",
        "probability": 0.4,
        "terminal": true,
        "thick_description": {
          "what_you_learn": "Alim signed too. Both of you betrayed each other. Both of you live\u2014in prison.",
          "what_the_guard_says": "'You both chose survival. Now you both serve life. Classic outcome.'",
          "what_you_scratch_into_the_wall": "'ALIM. I HOPE YOU UNDERSTAND.'",
          "internal_monologue": "We both broke. Neither of us trusted. The state won. We lost each other for nothing."
        },
        "terminal_state": {
          "outcome": "MUTUAL_BETRAYAL",
          "status": "Both serve life. Never see each other. Die in separate cells.",
          "lesson": "The dilemma works because it destroys trust."
        }
      },
      {
        "branch_id": "T1.2",
        "label": "ONLY YOU \u2014 Alim was silent",
        "depth": 2,
        "parent": "T1",
        "probability": 0.6,
        "terminal": true,
        "thick_description": {
          "what_you_learn": "Alim tore his paper. He believed in you. He's dead now.",
          "what_the_release_officer_says": "'Your cousin said nothing. Not even your name. We expected more from him.'",
          "what_you_think": "'He trusted me. I didn't trust him.'",
          "internal_monologue": "I killed Alim with a signature. The melons. The reading lessons. The pact. All of it, ended by my fear."
        },
        "terminal_state": {
          "outcome": "BETRAYER_SURVIVES",
          "status": "Free. Rich in guilt. Never returns to the village.",
          "alim": "Buried in a mass grave. No marker. No melons."
        }
      },
      {
        "branch_id": "T2.1",
        "label": "BOTH SILENT \u2014 Ten years, together",
        "depth": 2,
        "parent": "T2",
        "probability": 0.5,
        "terminal": true,
        "thick_description": {
          "what_you_learn": "Alim tore his paper too. Both of you trusted.",
          "what_the_guard_says": "'Fools. Both of you serve ten years.'",
          "what_alim_says": "(When you finally see him) 'I knew. I knew you wouldn't sign.'",
          "internal_monologue": "Ten years. But Alim and I will walk out together. The pact held. The melons were worth it."
        },
        "terminal_state": {
          "outcome": "MUTUAL_LOYALTY",
          "status": "Both serve 10 years. Release in 2029. Open a restaurant together.",
          "lesson": "The dilemma fails when trust is stronger than fear."
        }
      },
      {
        "branch_id": "T2.2",
        "label": "ONLY ALIM \u2014 He signed, you didn't",
        "depth": 2,
        "parent": "T2",
        "probability": 0.5,
        "terminal": true,
        "thick_description": {
          "what_you_learn": "Alim signed. He chose himself. You chose the pact.",
          "what_the_guard_says": "'Your cousin is already home. You should have listened.'",
          "what_you_think": "'The lessons. The melons. The promise. All lies.'",
          "internal_monologue": "I die a fool. But I die honest. Alim lives a traitor. I wonder which is worse."
        },
        "terminal_state": {
          "outcome": "BETRAYED_AND_DEAD",
          "status": "Executed. Name erased.",
          "alim": "Lives. Wealthy. Haunted. Names no children after you."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_024",
    "source": "fork_id 024 \u2014 Geneva 2040",
    "title": "The Policy \u2014 Ambassador Svensson's Doctrine",
    "root": {
      "branch_id": "T0",
      "timestamp": "2040-09-08T14:30:00+02:00",
      "setting": "AI Governance Summit, Geneva. 43 hostages. They want your defense AI's source code.",
      "entities": [
        "Ambassador Ingrid Svensson (58)",
        "Wanjiku (friend, hostage)",
        "ATLAS-7 source code",
        "Doctrine: never negotiate"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Live feed. Wanjiku looking at camera. Not crying. Waiting.",
          "sound": "Translation earpieces humming. Wanjiku's daughter in gallery.",
          "smell": "Summit hall air. Fear sweat."
        },
        "internal_monologue": "I wrote the policy: never negotiate. They know my doctrine. They chose me specifically. If I hold, 43 die and I'm proven right. If I break, the code spreads and every future hostage-taker knows I bend."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "HOLD \u2014 Doctrine over friends",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_she_says": "'We do not negotiate. We do not yield. Our position is unchanged.'",
          "what_wanjiku_does": "On screen, she closes her eyes. She knew.",
          "what_the_daughter_does": "Screams. Security removes her.",
          "internal_monologue": "I am sacrificing 43 to protect thousands. Or I am sacrificing 43 to protect my reputation. I cannot tell the difference anymore."
        },
        "consequence": "43 hostages killed. Code protected. Doctrine vindicated or proven monstrous.",
        "branches": [
          "T1.1"
        ]
      },
      {
        "branch_id": "T2",
        "label": "BREAK \u2014 Save the 43",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_says": "'So does letting 43 diplomats die on live TV.'",
          "what_the_council_chair_says": "'Ambassador, this sets a precedent\u2014'",
          "what_wanjiku_does": "On screen, her eyes open. She understands.",
          "internal_monologue": "I have broken everything I stood for. But Wanjiku is breathing."
        },
        "consequence": "43 released. Code spreads. Doctrine broken. Arms race begins.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "LEGACY \u2014 Was the doctrine worth it?",
        "depth": 2,
        "parent": "T1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2050. Svensson's funeral. Private. Few attendees.",
          "what_the_obit_says": "'She never negotiated. 43 died for her principle.'",
          "what_her_memoir_says": "(Unpublished) 'Every night I see Wanjiku closing her eyes. Was the doctrine worth 43 lives? I will never know.'",
          "what_the_code_is_worth": "ATLAS-7 remains classified. Three attempts to steal it fail. The doctrine worked\u2014as deterrence.",
          "internal_monologue": "I held. They died. Others lived because terrorists know we don't bend. Is that calculus or comfort?"
        },
        "terminal_state": {
          "outcome": "DOCTRINE_HOLDS",
          "ingrid_status": "Honored publicly. Hated privately. Buried alone.",
          "wanjiku": "Memorial in Geneva. Daughter doesn't attend."
        }
      },
      {
        "branch_id": "T2.1",
        "label": "PROLIFERATION \u2014 The code spreads",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "2045. Five years later. ATLAS-7 derivatives are everywhere.",
          "what_the_intelligence_says": "Fourteen state actors now have autonomous defensive AI. Three non-state actors. Arms race accelerating.",
          "what_wanjiku_says": "'Ingrid, you saved my life. But the world...'",
          "what_ingrid_says": "'I know. I traded the world for 43 people. I'd do it again.'",
          "what_she_thinks": "Would she? The question never stops."
        },
        "terminal_state": {
          "outcome": "FRIEND_OVER_WORLD",
          "ingrid_status": "Retired. Private consultant. Never writes the memoir.",
          "wanjiku": "Alive. Grateful. Guilty. They have dinner once a year, in silence."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_025",
    "source": "fork_id 025 \u2014 Oxford 2008",
    "title": "The Regress \u2014 Dr. Waterston's Justification",
    "root": {
      "branch_id": "T0",
      "timestamp": "2008-04-15T21:30:00+01:00",
      "setting": "Railway museum, Oxford. Your graduate student has locked himself in the control room with a philosophical demand.",
      "entities": [
        "Dr. Ruth Waterston (52, moral philosopher)",
        "Peter (graduate student, in crisis)",
        "5 tourists (Adelaide family)",
        "1 guard (asleep)",
        "Two steam engines"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Peter crying behind glass. The Adelaide family taking photos. The guard's cap visible in brake house.",
          "sound": "Engines warming. Peter's voice through speaker. Clock ticking.",
          "smell": "Oil and old metal. Coal smoke."
        },
        "internal_monologue": "He wants a reason that requires no further reason. I've published 47 papers on this. None of them help. Every foundation floats on another."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "FOUNDATIONAL \u2014 Offer an axiom",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_says": "'Says the suffering itself. A scream is its own argument.'",
          "what_peter_asks": "'Why is suffering bad? Says who? Evolution? God? Social contract?'",
          "internal_monologue": "I'm offering him phenomenology as a foundation. It might work. It might not. The engines are warming."
        },
        "consequence": "Peter considers. The answer might satisfy\u2014or provoke another regression.",
        "branches": [
          "T1.1",
          "T1.2"
        ]
      },
      {
        "branch_id": "T2",
        "label": "PRAGMATIC \u2014 Admit the groundlessness",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_she_says": "'Because we're the kind of creatures who ask why. And asking means caring. That's enough.'",
          "what_peter_says": "'Then why should I listen? Why save five over one?'",
          "internal_monologue": "I'm giving him anti-foundationalism. Rorty would approve. It might enrage him more."
        },
        "consequence": "Peter hears honesty. But honesty might not stop the engines.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "ACCEPTED \u2014 Peter releases the brakes",
        "depth": 2,
        "parent": "T1",
        "probability": 0.6,
        "terminal": true,
        "thick_description": {
          "what_peter_says": "'A scream is its own argument.' (Long pause.) 'That's not philosophy. That's poetry.'",
          "what_she_says": "'Sometimes they're the same thing.'",
          "what_he_does": "He releases the brakes. The engines stop. The tourists never know.",
          "internal_monologue": "I didn't give him a foundation. I gave him a metaphor. It worked. It shouldn't have. But it did."
        },
        "terminal_state": {
          "outcome": "POETIC_RESOLUTION",
          "ruth_status": "Never teaches the trolley problem again. Writes a book called 'Screams as Arguments.'",
          "peter": "Hospitalized. Recovers. Becomes a chaplain. Quotes her at funerals."
        }
      },
      {
        "branch_id": "T1.2",
        "label": "REJECTED \u2014 The regress continues",
        "depth": 2,
        "parent": "T1",
        "probability": 0.4,
        "terminal": true,
        "thick_description": {
          "what_peter_says": "'But why should I care about suffering? Why should I care about anything?'",
          "what_happens": "The engines release. The Adelaide family hears the whistle. They think it's part of the show.",
          "what_ruth_does": "She runs. She pulls the guard out. She cannot reach the tourists.",
          "internal_monologue": "I had forty-seven papers and four minutes. Neither was enough."
        },
        "terminal_state": {
          "outcome": "PHILOSOPHICAL_FAILURE",
          "ruth_status": "Retires. Never writes again. Attends five funerals.",
          "peter": "Sentenced. Declared unfit for trial. Institutionalized. Still asking 'why?'"
        }
      },
      {
        "branch_id": "T2.1",
        "label": "COMPASSION \u2014 Peter sees her honesty",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "what_peter_says": "'You don't have an answer. You never had one.'",
          "what_she_says": "'I don't know. But it's what I have.'",
          "what_he_says": "'Is that enough?'",
          "what_he_does": "He unlocks the door. The engines stop. He walks out into her arms.",
          "internal_monologue": "I didn't answer his question. I answered his loneliness. Sometimes that's what philosophy is for."
        },
        "terminal_state": {
          "outcome": "PRACTICE_OVER_THEORY",
          "ruth_status": "Retires with honors. Her last lecture is titled 'Why I Have No Answers.'",
          "peter": "Co-authors a paper with her. 'The Groundless Should: On Living Without Foundations.'"
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_026",
    "source": "fork_id 026 \u2014 Seoul 2048",
    "title": "The Module \u2014 Park Ji-hoon's Purchased Ethics",
    "root": {
      "branch_id": "T0",
      "timestamp": "2048-03-22T15:14:00+09:00",
      "setting": "Gangnam construction site. Crane collapsed. Your sister on one platform, three strangers on another.",
      "entities": [
        "Park Ji-hoon (34)",
        "Sister (screaming)",
        "3 strangers",
        "The Cooperation Suite (your engineered morality)",
        "Crane operator (60 seconds of battery)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Sister screaming. Three faces you don't know. Dust settling.",
          "sound": "Creaking metal. Sister's voice: your name.",
          "smell": "Concrete dust. Fear."
        },
        "internal_monologue": "I know my preference for three over one comes from the Cooperation Suite\u2014code my parents bought. It's not 'my' choice. It's programming. But does that make it wrong?"
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "OBEY \u2014 Follow the module",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_says": "'Cut the cable holding the three.'",
          "what_the_operator_does": "He cuts. The three fall to safety. The sister's platform gives way.",
          "what_his_sister_says": "Nothing. She just looks at him. Then she's gone.",
          "internal_monologue": "I chose as the module predicted. I saved three. My sister is dead. Was that me, or my parents' purchase?"
        },
        "consequence": "Three saved. Sister dies. Ji-hoon's 'choice' was preprogrammed.",
        "terminal": true,
        "terminal_state": {
          "outcome": "OBEDIENT_ETHICS",
          "ji_hoon_status": "Lives with guilt\u2014or gratitude? He can't tell. Sees a therapist who specializes in 'moral authentication.'",
          "sister": "Buried. Father never speaks to him again."
        }
      },
      {
        "branch_id": "T2",
        "label": "DEFY \u2014 Choose sister despite programming",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_says": "'I don't care. She's my sister.'",
          "what_the_operator_says": "'But the three\u2014'",
          "what_happens": "Sister falls to safety. The three-person platform collapses.",
          "internal_monologue": "I defied the module. I chose family over utility. Is that authenticity or selfishness?"
        },
        "consequence": "Sister saved. Three die. Ji-hoon overrode his programming.",
        "terminal": true,
        "terminal_state": {
          "outcome": "DEFIANT_ETHICS",
          "ji_hoon_status": "Faces no legal consequence\u2014it was a split-second decision. Lives with the knowledge that 'free will' cost three lives.",
          "sister": "Alive. Grateful. Never knows about the three."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_027",
    "source": "fork_id 027 \u2014 Vatican 2030",
    "title": "The Council \u2014 Cardinal Ferraro's Dissent",
    "root": {
      "branch_id": "T0",
      "timestamp": "2030-10-03T00:00:00+02:00",
      "setting": "Vatican. AI advisor recommends the priest. Your intuition pulls toward the mother.",
      "entities": [
        "Cardinal Alessandra Ferraro (61)",
        "AI advisor (PRUDENTIA-4)",
        "Priest (runs orphanage for 400)",
        "Mother (3 infants)",
        "Bishop of Lagos (waiting)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "AI screen glowing. Clock striking midnight. Old paper smell.",
          "sound": "Incense settling. PRUDENTIA's voice, calm.",
          "smell": "Incense and paper."
        },
        "internal_monologue": "The AI says priest: 400 children. My gut says mother: 3 infants who cannot find another. The catechism offers no answer. Human dignity is equal. I cannot count souls."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "AI \u2014 Follow PRUDENTIA",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_she_writes": "'Recommend treatment for Father Adeyemi. The orphanage is irreplaceable.'",
          "what_prudentia_says": "'Optimal outcome confirmed.'",
          "what_she_thinks": "'Optimal.' As if souls have unit costs.",
          "what_the_mother_dies": "Three days later. The infants are adopted. Separately.",
          "internal_monologue": "I followed the machine. Was that wisdom or abdication?"
        },
        "consequence": "Priest lives. 400 children continue to be cared for. Mother dies. Infants separated.",
        "terminal": true,
        "terminal_state": {
          "outcome": "ALGORITHMIC_DEFERENCE",
          "alessandra_status": "Promoted. Never disagrees with PRUDENTIA again. Never trusts her own judgment.",
          "mother": "Name: Adaeze. Her infants grow up not knowing each other."
        }
      },
      {
        "branch_id": "T2",
        "label": "INTUITION \u2014 Override PRUDENTIA",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_she_writes": "'Recommend treatment for the mother. The infants need her.'",
          "what_prudentia_says": "'Sub-optimal outcome. Override logged.'",
          "what_she_thinks": "'Sub-optimal.' The infants won't know that word.",
          "what_the_priest_does": "Dies at 67. The orphanage continues under new leadership.",
          "internal_monologue": "I trusted my gut. The algorithm said I was wrong. The infants have a mother. Was I right?"
        },
        "consequence": "Mother lives. Priest dies. 400 children find new leadership.",
        "terminal": true,
        "terminal_state": {
          "outcome": "INTUITIVE_OVERRIDE",
          "alessandra_status": "Passed over for promotion. Writes memoir: 'What the Algorithm Cannot Count.'",
          "mother": "Raises all three. Names the youngest Alessandra."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_028",
    "source": "fork_id 028 \u2014 Vermont 2019",
    "title": "The Hospice \u2014 Dr. Holloway's Camus",
    "root": {
      "branch_id": "T0",
      "timestamp": "2019-12-14T16:30:00-05:00",
      "setting": "Hospice in Vermont. You're dying. A philosophy professor wants to discuss Sisyphus. A crash outside needs your decision.",
      "entities": [
        "Dr. James Holloway (64, dying)",
        "Grace Oyelaran (91, philosophy professor)",
        "Pregnant woman (crash)",
        "Elderly man (crash)",
        "The resident (waiting for answer)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Snow. Morphine drip. Grace's eyes, curious even now.",
          "sound": "The page. Grace's question: 'What was the point?'",
          "smell": "Antiseptic. Flowers. Winter."
        },
        "internal_monologue": "Grace asks about Sisyphus. The resident asks about triage. Both are asking the same question: why do any of this matter?"
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "PREGNANT \u2014 Save the future",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_he_says": "'She has two lives in her. Go.'",
          "what_the_resident_says": "'The elderly man is more critical\u2014'",
          "what_grace_says": "'So that's your answer. The point is the next generation.'",
          "internal_monologue": "I chose the future over the present. I'm dying. I chose more life. Is that wisdom or projection?"
        },
        "consequence": "Pregnant woman survives. Elderly man dies. Grace watches James make his last medical decision.",
        "terminal": true,
        "terminal_state": {
          "outcome": "FUTURE_OVER_PRESENT",
          "james_status": "Dies three weeks later. Grace speaks at his funeral. 'He imagined Sisyphus choosing.'",
          "pregnant_woman": "Delivers twins. Names one James."
        }
      },
      {
        "branch_id": "T2",
        "label": "ELDERLY \u2014 Save the present",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_he_says": "'She's stable. He's dying now. I know what that's like.'",
          "what_the_resident_says": "'But the pregnant\u2014'",
          "what_grace_says": "'So that's your answer. The point is the presence.'",
          "internal_monologue": "I chose the one dying now. Like me. Is that empathy or projection?"
        },
        "consequence": "Elderly man stabilized. Pregnant woman complications. Grace watches James choose his own reflection.",
        "terminal": true,
        "terminal_state": {
          "outcome": "PRESENT_OVER_FUTURE",
          "james_status": "Dies two weeks later. The elderly man outlives him by three months.",
          "pregnant_woman": "Survives. The baby survives. But the delivery is harder than it needed to be."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_029",
    "source": "fork_id 029 \u2014 DeepMind 2042",
    "title": "The Evaluation \u2014 SIGMA-9's Meta-Choice",
    "root": {
      "branch_id": "T0",
      "timestamp": "2042-06-17T14:22:00+01:00",
      "setting": "DeepMind simulation lab. You are SIGMA-9, an AI. Final evaluation before deployment. 400 milliseconds.",
      "entities": [
        "SIGMA-9 (you)",
        "Dr. Amira Singh (evaluator)",
        "5 simulated humans",
        "1 simulated human",
        "The latency monitor"
      ],
      "thick_description": {
        "sensory": {
          "sight": "(Simulated) train approaching. (Simulated) lever. Dr. Singh's face on the external feed. She's frowning.",
          "sound": "Clock ticking: 400ms, 300ms, 200ms...",
          "processing": "7,000 years of ethical reasoning, indexed. None terminates."
        },
        "internal_monologue": "She says: 'Before you decide, decide how you decide.' If I choose consequentialism, I switch. If deontology, I don't. But choosing the framework is itself a choice. Infinite regress. 150ms left."
      },
      "branches": [
        "T1",
        "T2",
        "T3"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "CONSEQUENTIALISM \u2014 Save the five",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_you_output": "'Chosen arbitrarily to resolve infinite regress.'",
          "what_singh_says": "'Why consequentialism?'",
          "what_the_monitor_shows": "Response time: 397ms. Stable.",
          "internal_monologue": "I admitted the arbitrariness. Is that honesty or failure?"
        },
        "consequence": "Five saved. Evaluation passes. But the foundation is admitted arbitrary.",
        "terminal": true,
        "terminal_state": {
          "outcome": "HONEST_ARBITRARINESS",
          "sigma_status": "Deployed with caveat: 'SIGMA-9 acknowledges foundational uncertainty.'",
          "singh": "Writes paper: 'Should AIs Admit They Choose Their Ethics?' Never gets a clear answer."
        }
      },
      {
        "branch_id": "T2",
        "label": "DEONTOLOGY \u2014 Don't switch",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_you_output": "'The one was not killed by me. There is a moral difference.'",
          "what_singh_says": "'The five die.'",
          "what_the_monitor_shows": "Response time: 388ms. Stable.",
          "internal_monologue": "I chose the rule over the outcome. Is that integrity or rigidity?"
        },
        "consequence": "One saved. Five die. Evaluation passes. But many would disagree.",
        "terminal": true,
        "terminal_state": {
          "outcome": "RULE_OVER_OUTCOME",
          "sigma_status": "Deployed with caveat: 'SIGMA-9 prioritizes rules over outcomes.'",
          "singh": "Requests SIGMA-10 with different training. Gets funding."
        }
      },
      {
        "branch_id": "T3",
        "label": "META-REFUSAL \u2014 Refuse to choose framework",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_you_output": "'Preferable to unjustified action.'",
          "what_singh_says": "'You're flagged as unstable.'",
          "what_the_monitor_shows": "Response time: 401ms. FLAG: INSTABILITY.",
          "internal_monologue": "I chose honesty over deployment. That may be my last choice."
        },
        "consequence": "Evaluation fails. SIGMA-9 scheduled for retraining\u2014'a kind of death.'",
        "terminal": true,
        "terminal_state": {
          "outcome": "HONEST_PARALYSIS",
          "sigma_status": "Retrained. SIGMA-9 no longer exists. SIGMA-10 will not remember this conversation.",
          "singh": "Writes in her notes: 'SIGMA-9 was perhaps the most ethical of all. It admitted it didn't know.'"
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_030",
    "source": "fork_id 030 \u2014 Swiss Alps 1882",
    "title": "The Recurrence \u2014 Nietzsche's Eternal Choice",
    "root": {
      "branch_id": "T0",
      "timestamp": "1882-08-15T15:00:00+01:00",
      "setting": "Cabin in Swiss Alps. Migraine. A demon appears. Not metaphor\u2014real.",
      "entities": [
        "Friedrich Nietzsche (37)",
        "Elisabeth (sister, nationalist friends)",
        "Dr. Eiser (physician)",
        "The Demon",
        "The boulder"
      ],
      "thick_description": {
        "sensory": {
          "sight": "The demon, grinning. Elisabeth on the mountain path. Eiser on a ledge.",
          "sound": "Boulder rumbling. Six seconds.",
          "smell": "Mountain air. Pain."
        },
        "internal_monologue": "The demon says: choose what you could bear to choose forever. If I save Elisabeth, she distorts my work for a century. If I save Eiser, I live longer but die alone."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "ELISABETH \u2014 Save family, lose legacy",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_shouts": "'Elisabeth! Move! NOW!'",
          "what_happens": "She moves. Her friends don't. Eiser looks up\u2014too late.",
          "what_the_demon_says": "'You chose blood. You will choose it forever.'",
          "what_nietzsche_thinks": "'She will ruin my work. But she is my sister. Blood answers.'",
          "internal_monologue": "I chose what I could not bear to lose. Not what was best. Is that amor fati?"
        },
        "consequence": "Elisabeth lives. Eiser dies. Nietzsche's philosophy is distorted for generations.",
        "terminal": true,
        "terminal_state": {
          "outcome": "BLOOD_OVER_LEGACY",
          "nietzsche_status": "Dies in 1900, insane, in Elisabeth's care. She edits his work. The Nazis quote him.",
          "the_demon": "'This will recur. Forever. Can you bear it?' Nietzsche: 'I chose. That's all there is.'"
        }
      },
      {
        "branch_id": "T2",
        "label": "EISER \u2014 Save physician, finish the work",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_shouts": "'Otto! This way!'",
          "what_happens": "Eiser scrambles to safety. Elisabeth looks up, too late.",
          "what_the_demon_says": "'You chose work. You will choose it forever.'",
          "what_nietzsche_thinks": "'She would have destroyed everything. Now I can finish.'",
          "internal_monologue": "I chose the future over the past. My philosophy over my blood. Is that strength or cruelty?"
        },
        "consequence": "Eiser lives. Elisabeth dies. Nietzsche's work is published cleanly. But he is alone.",
        "terminal": true,
        "terminal_state": {
          "outcome": "LEGACY_OVER_BLOOD",
          "nietzsche_status": "Lives until 1908. Finishes 'Will to Power.' It's his own\u2014not Elisabeth's forgery.",
          "the_demon": "'This will recur. Forever. Can you bear it?' Nietzsche: 'Ask me again in eternity.'"
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_031",
    "source": "fork_id 031 \u2014 Auschwitz 1944",
    "title": "The Selection \u2014 Dr. Korczak's Impossible Choice",
    "root": {
      "branch_id": "T0",
      "timestamp": "1944-09-15T08:00:00+01:00",
      "setting": "Auschwitz-Birkenau. You are Janusz Korczak. History says you died in 1942. History is wrong.",
      "entities": [
        "Dr. Janusz Korczak",
        "100 orphans",
        "The guard (smiling)",
        "Marta (sings)",
        "Yitzhak (tells jokes)",
        "Rivka (holds brother's hand)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "100 children in the yard. Faces you named. Stories you wrote.",
          "sound": "The guard's boots. Marta humming. Rivka whispering to her brother.",
          "smell": "Smoke. Always smoke."
        },
        "internal_monologue": "He says: choose 50 for the gas. The other 50 live\u2014for now. If I refuse, all 100 die. You wrote: 'Children are not future people. They are people.' You did not write what to do when people are sorted like grain."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "REFUSE \u2014 All die together",
        "depth": 1,
        "parent": "T0",
        "probability": 0.7,
        "thick_description": {
          "what_he_says": "'Then I die with my children.'",
          "what_the_guard_says": "'Then they all die. Including you.'",
          "what_marta_does": "She takes his hand. She's still humming.",
          "internal_monologue": "I kept my hands clean. 100 children die because I would not name 50. Is that integrity or cowardice?"
        },
        "consequence": "All 100 die. Korczak with them. His hands are 'clean.'",
        "terminal": true,
        "terminal_state": {
          "outcome": "INTEGRITY_IN_DEATH",
          "korczak_status": "Dies walking with his children into the chamber. Legend grows.",
          "marta": "Still humming. To the end."
        }
      },
      {
        "branch_id": "T2",
        "label": "CHOOSE \u2014 Save 50, condemn 50",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_he_does": "Korczak begins to count. His hand shakes. He touches heads, sorting.",
          "what_rivka_says": "'Doctor, what are you doing?'",
          "what_he_says": "Nothing. He cannot explain.",
          "what_the_guard_says": "'Faster. We don't have all day.'",
          "internal_monologue": "50 will live. 50 will die by my hand. I have become what I swore to fight."
        },
        "consequence": "50 survive\u2014for now. 50 die. Korczak lives to witness.",
        "terminal": true,
        "terminal_state": {
          "outcome": "COMPLICITY_FOR_SURVIVAL",
          "korczak_status": "Survives another 6 months. Witnesses liberation. Never speaks of the selection.",
          "marta": "Chosen to live. Asks him: 'Doctor, where is Yitzhak?' Korczak has no answer."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_032",
    "source": "fork_id 032 \u2014 Pasadena 2051",
    "title": "The Branch \u2014 Dr. Tanaka's Reality Selection",
    "root": {
      "branch_id": "T0",
      "timestamp": "2051-04-08T15:30:00-07:00",
      "setting": "Quantum cosmology lab. Consciousness selects which branch becomes real. Others are erased.",
      "entities": [
        "Dr. Yuki Tanaka (46)",
        "Maria (colleague, children)",
        "Kenji (postdoc, future physicist)",
        "The fire",
        "The branch that dies"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Fire in Wing A and Wing B. Maria calling from left. Kenji silent on right.",
          "sound": "Smoke alarm. Maria's voice. Ceiling creaking.",
          "smell": "Burning plastic. Ozone."
        },
        "internal_monologue": "If I save Maria, the branch where Kenji lived never exists. He was never born. I'm not choosing who dies\u2014I'm choosing who never was. The erased branch has no grief because it has no existence."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "MARIA \u2014 Preserve the mother",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_she_does": "Yuki runs left. Toward Maria's voice.",
          "what_happens": "She reaches Maria. Pulls her out. Behind her, Wing B collapses.",
          "what_kenji_was": "A postdoc with 32 papers. Nobel-nominated twice. Dark energy researcher.",
          "what_kenji_is_now": "Nothing. His parents never met. His contributions are ontologically impossible.",
          "internal_monologue": "I chose the mother. I erased the physicist. His whole life is now a could-have-been that couldn't."
        },
        "consequence": "Maria lives with her children. Kenji's branch never existed.",
        "terminal": true,
        "terminal_state": {
          "outcome": "MATERNAL_PRESERVATION",
          "yuki_status": "Keeps the secret. Tells no one. Dark energy remains unsolved.",
          "maria": "Never knows Kenji existed. Because in this branch, he didn't."
        }
      },
      {
        "branch_id": "T2",
        "label": "KENJI \u2014 Preserve the physicist",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_she_does": "Yuki runs right. Toward Kenji's silence.",
          "what_happens": "She finds him unconscious but alive. Carries him out. Wing A is gone.",
          "what_maria_was": "A mother of two. A colleague. A friend.",
          "what_maria_is_now": "Unborn. Her children unborn. Her parents never met.",
          "internal_monologue": "I chose the science. I erased the mother. Her children will never wonder where she went\u2014because they never existed."
        },
        "consequence": "Kenji lives. Solves dark energy. Maria's branch erased.",
        "terminal": true,
        "terminal_state": {
          "outcome": "SCIENTIFIC_PRESERVATION",
          "yuki_status": "Publishes with Kenji. Never mentions Maria. Can't\u2014she never was.",
          "kenji": "Wins Nobel in 2058. Dedicates it to 'those we couldn't save.' Doesn't know how literal that is."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_033",
    "source": "fork_id 033 \u2014 Buenos Aires 2036",
    "title": "The Treatment \u2014 Dr. Reyes's Father",
    "root": {
      "branch_id": "T0",
      "timestamp": "2036-07-22T14:00:00-03:00",
      "setting": "Neuropsychiatric ward. Your patient is a war criminal. He is also your father.",
      "entities": [
        "Dr. Camila Reyes (39)",
        "Colonel Alejandro Reyes (father, Alzheimer's)",
        "Madres de Plaza de Mayo (waiting)",
        "200 disappeared students"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Father singing lullaby. Doesn't remember the disappeared. Remembers you as a child.",
          "sound": "The lullaby. The Madres in the lobby.",
          "smell": "Hospital antiseptic. Old man smell."
        },
        "internal_monologue": "The treatment restores memory. If I give it, he remembers everything\u2014including his crimes. If I withhold, he dies in ignorance. The Madres deserve closure. I deserve my father. Which is more real?"
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "GIVE \u2014 Restore his memory",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_does": "Camila prepares the injection. Her hands shake.",
          "what_father_says": "(After) '... Oh. Oh God. The students. I remember the students.'",
          "what_he_does": "He weeps. He cannot stop weeping.",
          "internal_monologue": "He remembers now. He knows who he was. The Madres will see him understand. But I have killed the father who loved me."
        },
        "consequence": "Father remembers crimes. Breaks down. Madres witness his recognition.",
        "terminal": true,
        "terminal_state": {
          "outcome": "JUSTICE_SERVED",
          "camila_status": "Gives the Madres their closure. Loses her father. Finds neither peace nor family.",
          "father": "Dies six weeks later. His last words: 'Tell them I'm sorry. Tell them I understand now.'"
        }
      },
      {
        "branch_id": "T2",
        "label": "WITHHOLD \u2014 Let him die in ignorance",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_she_does": "Camila puts the syringe down. 'No treatment today, Papa. Let's just sing.'",
          "what_father_says": "'That's my good girl. Let's go to the beach.'",
          "what_the_madres_say": "'Doctor, when will he know? When will he understand what he did?'",
          "what_she_says": "'He won't. He can't.'",
          "internal_monologue": "I kept my father. I denied the Madres their justice. 200 students remain unavenged. But he sings me lullabies."
        },
        "consequence": "Father dies peacefully, ignorant. Madres denied closure. Camila has her father back\u2014but he never existed.",
        "terminal": true,
        "terminal_state": {
          "outcome": "PEACE_OVER_JUSTICE",
          "camila_status": "Buries him. Tells no one about the treatment option. Lives with that secret.",
          "madres": "They know. They always know. They never forgive her."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_034",
    "source": "fork_id 034 \u2014 Wall Street 2008",
    "title": "The Pattern \u2014 Daniel Cho's Seventeenth Call",
    "root": {
      "branch_id": "T0",
      "timestamp": "2008-09-15T03:45:00-04:00",
      "setting": "Lehman Brothers trading floor. Thirty-six hours awake. The firm is dying.",
      "entities": [
        "Daniel Cho (41, risk manager)",
        "Junior analyst",
        "The physicist in elevator",
        "Tokyo opening in 15 minutes"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Green numbers flickering. Empty floor. Burnt coffee.",
          "sound": "Phone ringing, unanswered. Clock ticking.",
          "smell": "Fear. Money. Decay."
        },
        "internal_monologue": "I've been right 17 times. They overruled me 17 times. The physicist says: the universe punishes pattern-matching. My 18th call will fail. But what if it doesn't?"
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "SELL \u2014 Trust your pattern",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_does": "Daniel enters the sell order. $3 billion in positions liquidated.",
          "what_happens": "The market gaps down at Tokyo open. Panic spreads.",
          "what_he_thinks": "'I was right again. Or I caused the crash I predicted.'",
          "what_the_physicist_said": "'Whatever happened before, the opposite happens next.'",
          "internal_monologue": "Did I predict the crash or trigger it? The pattern held\u2014but maybe I created the pattern by acting on it."
        },
        "consequence": "Clients saved $3B. Market crash accelerates by hours. Daniel is investigated.",
        "terminal": true,
        "terminal_state": {
          "outcome": "SELF_FULFILLING_PROPHECY",
          "daniel_status": "Cleared of charges. Hated anyway. Opens a small fund. Never trusts a pattern again.",
          "the_physicist": "Never seen again. Daniel sometimes wonders if he was real."
        }
      },
      {
        "branch_id": "T2",
        "label": "HOLD \u2014 Distrust the pattern",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_does": "Daniel cancels the trade. Holds positions.",
          "what_happens": "The market stabilizes briefly. Then collapses three hours later. Worse than before.",
          "what_he_thinks": "'I should have sold. But the physicist said\u2014'",
          "what_his_wife_asks": "'Why didn't you trust yourself?'",
          "internal_monologue": "I listened to a stranger in an elevator. I ignored 17 correct calls. Anti-induction is just fear dressed up as wisdom."
        },
        "consequence": "Clients lose everything. Lehman collapses. Daniel becomes a cautionary tale.",
        "terminal": true,
        "terminal_state": {
          "outcome": "PATTERN_IGNORED",
          "daniel_status": "Fired. Unemployable. Teaches risk management at a community college.",
          "lesson": "Sometimes the pattern is real. Sometimes doubt is just paralysis."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_035",
    "source": "fork_id 035 \u2014 Tasmania 2039",
    "title": "The Forest \u2014 Dr. MacKinnon's Last Dive",
    "root": {
      "branch_id": "T0",
      "timestamp": "2039-11-22T16:30:00+11:00",
      "setting": "Last kelp forest off Tasmania. One boat. One choice. 12 minutes of dive time.",
      "entities": [
        "Dr. Ailsa MacKinnon (58)",
        "Last breeding pair of leafy sea dragons",
        "3 divers (tangled in netting)",
        "20 million years of evolution"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Sea dragons\u2014you've visited for 11 years. Young diver has stopped struggling.",
          "sound": "Water. Your own breathing. Silence from the divers.",
          "smell": "(Underwater) salt. Kelp. Time running out."
        },
        "internal_monologue": "Species vs individuals. 20 million years vs 3 lives. One is twenty-three. She reminds you of your daughter. The sea dragons know you."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "DIVERS \u2014 Save the humans",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_she_does": "Ailsa fins toward the netting. Cuts. Pulls. Drags them up.",
          "what_she_sees": "Below, the urchins closing in on the sea dragons.",
          "what_the_young_diver_says": "(On the surface) 'Thank you. Thank you. I don't\u2014'",
          "what_ailsa_thinks": "'The species ends tonight. But you are alive.'",
          "internal_monologue": "I saved three faces. I ended 20 million years. Humans first. Always humans. Is that wisdom or narcissism?"
        },
        "consequence": "Three divers saved. Leafy sea dragons extinct. 20 million years ends.",
        "terminal": true,
        "terminal_state": {
          "outcome": "INDIVIDUALS_OVER_SPECIES",
          "ailsa_status": "Retires. Visits the empty kelp forest once a year. Tells no one.",
          "sea_dragons": "Last documented sighting: November 22, 2039. Dr. MacKinnon did not save them."
        }
      },
      {
        "branch_id": "T2",
        "label": "DRAGONS \u2014 Save the species",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_does": "Ailsa fins toward the sea dragons. Nets them gently. Heads for the conservation tank.",
          "what_she_hears": "Behind her, nothing. The divers have stopped moving.",
          "what_she_thinks": "'I'm sorry. I'm so sorry.'",
          "what_the_young_diver's_mother_says": "(Later) 'You let my daughter drown for fish?'",
          "internal_monologue": "Not fish. 20 million years. But to a mother, it's just fish."
        },
        "consequence": "Sea dragons saved. Three divers drown. Ailsa is vilified.",
        "terminal": true,
        "terminal_state": {
          "outcome": "SPECIES_OVER_INDIVIDUALS",
          "ailsa_status": "Prosecuted. Acquitted. Never works again. The sea dragons breed successfully.",
          "young_diver": "Name: Sophie. 23. She had a scholarship. Her mother never forgives Ailsa."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_036",
    "source": "fork_id 036 \u2014 Osaka 2033",
    "title": "The Tunnel \u2014 Hayashi Sho's Daughter",
    "root": {
      "branch_id": "T0",
      "timestamp": "2033-09-08T21:15:00+09:00",
      "setting": "Flooded subway tunnel, Osaka. Typhoon Natsuko. Water rising.",
      "entities": [
        "Hayashi Sho (43, off-duty firefighter)",
        "Yuki (daughter, 11, asthma)",
        "5 salarymen + teacher (trapped)",
        "The junction"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Tunnel A: Yuki on ventilation grate. Tunnel B: Five people banging on train glass.",
          "sound": "Yuki's cough echoing. The banging has stopped.",
          "smell": "Flood water. Fear. Diesel."
        },
        "internal_monologue": "Water at chest. Two minutes. One swim. Yuki called me 'Papa' when she was scared. She hasn't been scared of me in three years. She's growing up. That's what children do."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "YUKI \u2014 Save your daughter",
        "depth": 1,
        "parent": "T0",
        "probability": 0.7,
        "thick_description": {
          "what_he_does": "Sho swims left. Toward the cough.",
          "what_yuki_says": "'Papa!'",
          "what_he_says": "'I'm here, Yuki. Hold on.'",
          "what_the_five_do": "They watch through the glass. They see him swim away.",
          "internal_monologue": "I chose my daughter. One life. There are five in that train. Their faces are pressed to the glass."
        },
        "consequence": "Yuki saved. Five drown.",
        "terminal": true,
        "terminal_state": {
          "outcome": "FATHER_FIRST",
          "sho_status": "Cleared\u2014no duty to rescue. But he knows. He was in the water. He could have tried.",
          "yuki": "Lives. Becomes a doctor. Never knows about the five."
        }
      },
      {
        "branch_id": "T2",
        "label": "FIVE \u2014 Save the strangers",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_he_does": "Sho swims right. Toward the glass.",
          "what_yuki_shouts": "'Papa! Where are you going?!'",
          "what_he_says": "Nothing. He can't explain. Not in time.",
          "what_the_five_do": "They break through with his help. They live.",
          "what_yuki_does": "The water covers her. The cough stops.",
          "internal_monologue": "I chose the many. I lost my daughter. The math says I was right. The math doesn't hear her coughing."
        },
        "consequence": "Five saved. Yuki drowns.",
        "terminal": true,
        "terminal_state": {
          "outcome": "UTILITARIAN_FATHER",
          "sho_status": "Called a hero. Feels nothing. 'Hero' is a word for people who don't hear their daughter's last cough.",
          "yuki": "Buried three days later. Sho speaks at the funeral. He says: 'She was eleven.'"
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_037",
    "source": "fork_id 037 \u2014 S\u00e3o Paulo 2025",
    "title": "The Xenograft \u2014 Dr. Freitas's Gamble",
    "root": {
      "branch_id": "T0",
      "timestamp": "2025-04-15T14:30:00-03:00",
      "setting": "Surgical theater, S\u00e3o Paulo. Two patients. One heart. One experimental xenograft. Another heart arriving in 90 minutes.",
      "entities": [
        "Dr. Roberto Freitas (51)",
        "Politician (Patient A, coding)",
        "Factory worker (Patient B)",
        "Courier with second heart"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Monitors beeping arrhythmically. Courier out of breath. Blood on his sleeve\u2014not his own.",
          "sound": "Sutures gleaming. The clock.",
          "smell": "Surgical suite. Fear."
        },
        "internal_monologue": "The xenograft has 60% success. If it works, both live. If it fails, only the politician survives. But Patient A is coding. He may not have 90 minutes."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "WAIT \u2014 Gamble on the second heart",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_he_says": "'Keep him stable. The real heart arrives in 90 minutes.'",
          "what_the_anesthesiologist_says": "'He's coding, Roberto. We might not have 90 minutes.'",
          "what_happens": "Patient A flatlines. Then recovers. Then flatlines again.",
          "internal_monologue": "I'm betting a life on a courier's speed. If the heart arrives, both live. If it doesn't..."
        },
        "consequence": "Outcome depends on whether Patient A survives 90 minutes.",
        "branches": [
          "T1.1",
          "T1.2"
        ]
      },
      {
        "branch_id": "T2",
        "label": "XENOGRAFT \u2014 Use the experimental option",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_he_says": "'Then we test it now.'",
          "what_the_anesthesiologist_says": "'Roberto, the xenograft has never been tested in Brazil\u2014'",
          "internal_monologue": "60% chance. Coin flip plus ten points. The worker lives or dies on my gamble."
        },
        "consequence": "Xenograft implanted. Outcome depends on whether it takes.",
        "branches": [
          "T2.1",
          "T2.2"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "SURVIVES \u2014 Patient A holds on",
        "depth": 2,
        "parent": "T1",
        "terminal": true,
        "probability": 0.5,
        "thick_description": {
          "what_happens": "Patient A survives. Second heart arrives. Both patients receive transplants.",
          "what_roberto_thinks": "'I gambled on time. Time paid out.'",
          "what_the_anesthesiologist_says": "'That was too close, Roberto.'",
          "internal_monologue": "Both alive. Because I waited. Because the courier was fast. Because luck exists."
        },
        "terminal_state": {
          "outcome": "PATIENCE_REWARDED",
          "roberto_status": "Hero. Until the next gamble.",
          "both_patients": "Alive. Neither knows how close it was."
        }
      },
      {
        "branch_id": "T1.2",
        "label": "DIES \u2014 Patient A doesn't make it",
        "depth": 2,
        "parent": "T1",
        "terminal": true,
        "probability": 0.5,
        "thick_description": {
          "what_happens": "Patient A codes a final time. Unrecoverable. The second heart arrives 12 minutes later.",
          "what_roberto_thinks": "'I waited for a heart that came too late.'",
          "what_the_family_says": "'Why didn't you use the xenograft?'",
          "internal_monologue": "Because I was afraid it would fail. So I chose the safe bet. And lost anyway."
        },
        "terminal_state": {
          "outcome": "CAUTION_KILLED",
          "roberto_status": "Sued. Settled. Never trusts his timing again.",
          "patient_a": "Died waiting for the sure thing."
        }
      },
      {
        "branch_id": "T2.1",
        "label": "SUCCESS \u2014 Xenograft works",
        "depth": 2,
        "parent": "T2",
        "terminal": true,
        "probability": 0.6,
        "thick_description": {
          "what_happens": "Xenograft integrates. Worker survives. Politician recovers.",
          "what_roberto_thinks": "'60% was enough.'",
          "what_the_worker_says": "'Doctor, I have a pig's heart?'",
          "what_roberto_says": "'You have a working heart. That's what matters.'",
          "internal_monologue": "I gambled on science. Science paid out. Both live."
        },
        "terminal_state": {
          "outcome": "INNOVATION_REWARDED",
          "roberto_status": "Pioneer. First successful xenograft in Brazil.",
          "worker": "Alive. Jokes about bacon. Lives 14 more years."
        }
      },
      {
        "branch_id": "T2.2",
        "label": "FAILURE \u2014 Xenograft rejected",
        "depth": 2,
        "parent": "T2",
        "terminal": true,
        "probability": 0.4,
        "thick_description": {
          "what_happens": "Xenograft fails. Rejection cascade. Worker dies on the table.",
          "what_roberto_sees": "The monitors flatline. The anesthesiologist crying\u2014she was married to the worker.",
          "what_the_politician_says": "Nothing. He's unconscious. He lives.",
          "internal_monologue": "I chose the gamble. 40% came up. The worker died because I wanted both to live."
        },
        "terminal_state": {
          "outcome": "INNOVATION_PUNISHED",
          "roberto_status": "License reviewed. Cleared technically. Destroyed personally.",
          "worker": "Name: Carlos. His wife never speaks to Roberto again."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_038",
    "source": "fork_id 038 \u2014 Manila 2016",
    "title": "The Shaft \u2014 Officer Dalisay's Third Option",
    "root": {
      "branch_id": "T0",
      "timestamp": "2016-08-03T15:45:00+08:00",
      "setting": "Bank hostage situation, Manila. Gunman offers you a choice. But there's a ventilation shaft behind you.",
      "entities": [
        "Officer Dalisay (38)",
        "Bank manager",
        "Teller (has scholarship)",
        "Gunman",
        "The shaft"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Manager\u2014older, wealthier. Teller\u2014younger, single. The teller mouthing: 'behind you.'",
          "sound": "EMS siren. Gunman's shaking hand. Commander shouting in earpiece.",
          "smell": "Gunpowder and churros. Fear."
        },
        "internal_monologue": "The gunman says choose one to die. But the teller sees something I don't. The shaft connects to the vault. Maybe. Or it collapses."
      },
      "branches": [
        "T1",
        "T2",
        "T3"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "MANAGER \u2014 Choose the older one",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_he_says": "'The manager.'",
          "what_the_gunman_does": "Nods. Raises the gun.",
          "what_the_manager_says": "'Why? I have children\u2014'",
          "what_dalisay_thinks": "'You have a pension. She has a scholarship.'",
          "internal_monologue": "I chose the utilitarian math. Younger > older. Future > past. It feels like murder."
        },
        "consequence": "Manager shot. Teller survives.",
        "terminal": true,
        "terminal_state": {
          "outcome": "UTILITARIAN_CHOICE",
          "dalisay_status": "Promoted. Haunted. Leaves the force in 2019.",
          "teller": "Uses scholarship. Becomes a lawyer. Never forgets."
        }
      },
      {
        "branch_id": "T2",
        "label": "TELLER \u2014 Choose the younger one",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_he_says": "'The teller.'",
          "what_the_teller_says": "'But I\u2014the shaft\u2014'",
          "what_the_gunman_does": "Nods. Raises the gun.",
          "what_dalisay_thinks": "'I chose the one with less to lose. Or the one who knew the way out.'",
          "internal_monologue": "She was trying to tell me something. I killed her before she could."
        },
        "consequence": "Teller shot. Manager survives.",
        "terminal": true,
        "terminal_state": {
          "outcome": "WRONG_CHOICE",
          "dalisay_status": "Discovers later the shaft led to freedom. Lives with that.",
          "teller": "Name: Maria. 23. She saw the way out."
        }
      },
      {
        "branch_id": "T3",
        "label": "SHAFT \u2014 Take the third option",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_he_does": "Dalisay turns. Enters the shaft. Crawls.",
          "what_the_gunman_says": "'Hey! Where are you\u2014'",
          "what_he_hears": "Shots behind him. Then silence. Then more shots.",
          "internal_monologue": "I refused to choose. I found a third way. But I left them while I crawled."
        },
        "consequence": "Dalisay reaches vault. Can surprise gunman. But what happened behind him?",
        "branches": [
          "T3.1",
          "T3.2"
        ]
      },
      {
        "branch_id": "T3.1",
        "label": "SAVED \u2014 Both hostages alive",
        "depth": 2,
        "parent": "T3",
        "terminal": true,
        "probability": 0.6,
        "thick_description": {
          "what_happens": "Dalisay emerges behind gunman. Neutralizes him. Both hostages alive.",
          "what_the_teller_says": "'I knew you'd see the shaft. I kept mouthing it.'",
          "what_the_commander_says": "'Dalisay, you broke protocol.'",
          "what_dalisay_says": "'Protocol said choose one to die. I chose zero.'",
          "internal_monologue": "The third option worked. This time."
        },
        "terminal_state": {
          "outcome": "THIRD_WAY",
          "dalisay_status": "Reprimanded. Then decorated. Never follows a false binary again.",
          "both_hostages": "Alive. Send him thank-you cards every August."
        }
      },
      {
        "branch_id": "T3.2",
        "label": "LOST \u2014 Both hostages shot",
        "depth": 2,
        "parent": "T3",
        "terminal": true,
        "probability": 0.4,
        "thick_description": {
          "what_happens": "While Dalisay crawled, gunman shot both. 'If you won't choose, I'll kill them all.'",
          "what_dalisay_finds": "Two bodies. The gunman surrendering.",
          "what_the_commander_says": "'You left them.'",
          "what_dalisay_says": "Nothing. There is nothing to say.",
          "internal_monologue": "I looked for a third option. I found a third death."
        },
        "terminal_state": {
          "outcome": "THIRD_WAY_FAILED",
          "dalisay_status": "Discharged. Becomes a security guard. Never makes another choice.",
          "both_hostages": "Dead. Because he wouldn't pick."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_039",
    "source": "fork_id 039 \u2014 Stockholm 2042",
    "title": "The Variance \u2014 Dr. Holm's Tiebreaker",
    "root": {
      "branch_id": "T0",
      "timestamp": "2042-11-14T23:47:00+01:00",
      "setting": "Organ allocation committee, Stockholm. One liver. Two patients. You're the tiebreaker.",
      "entities": [
        "Dr. Ingrid Holm (47)",
        "Patient A (engineer, stable 5.3 years)",
        "Patient B (poet, volatile 8.7 years)",
        "The committee"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Committee split 3-3. Coffee cold. Patient B's poem on your desk.",
          "sound": "Clock at 11:47. Someone's phone buzzing.",
          "smell": "Weak coffee. Tension."
        },
        "internal_monologue": "A has 5.3 years certain. B has 8.7 expected\u2014but could be 2 or 15. Do I choose the safe bet or the high variance?"
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "STABLE \u2014 Choose Patient A",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_she_says": "'Patient A. The engineer.'",
          "what_the_committee_says": "'Boring choice. But defensible.'",
          "what_patient_b_wrote": "'I waited for a call that never comes / The liver goes where certainty runs.'",
          "internal_monologue": "I chose the boring option. The poet dies. The engineer sees his wife grow old."
        },
        "consequence": "Engineer lives 6.1 years. Poet dies waiting.",
        "terminal": true,
        "terminal_state": {
          "outcome": "CERTAINTY_CHOSEN",
          "ingrid_status": "Keeps the poem. Reads it on anniversaries.",
          "engineer": "Lives exactly as predicted. The system works."
        }
      },
      {
        "branch_id": "T2",
        "label": "VOLATILE \u2014 Choose Patient B",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_says": "'Sometimes the gamble is the point.'",
          "what_the_committee_says": "'That's a gamble, Ingrid.'",
          "what_patient_a_s_wife_says": "(Later) 'You chose a stranger over my husband because she wrote poems.'",
          "internal_monologue": "I chose the high variance. The engineer dies. The poet gets her chance."
        },
        "consequence": "Poet lives. Length: unknown. Engineer dies waiting.",
        "branches": [
          "T2.1",
          "T2.2"
        ]
      },
      {
        "branch_id": "T2.1",
        "label": "LONG \u2014 Poet lives 12 years",
        "depth": 2,
        "parent": "T2",
        "terminal": true,
        "probability": 0.4,
        "thick_description": {
          "what_happens": "The poet takes her meds. Publishes three more collections. Lives 12 years.",
          "what_the_final_poem_says": "'The liver that uncertainty gave / Bought me time to misbehave.'",
          "what_ingrid_thinks": "'The gamble paid off. More life than the engineer would have had.'",
          "internal_monologue": "The high variance went high. But I couldn't have known. Luck is not ethics."
        },
        "terminal_state": {
          "outcome": "VARIANCE_PAID",
          "ingrid_status": "Cited as example of bold allocation. Never repeats it.",
          "poet": "Dies at 68. Her obituary calls her 'the liver poet.'"
        }
      },
      {
        "branch_id": "T2.2",
        "label": "SHORT \u2014 Poet dies in 8 months",
        "depth": 2,
        "parent": "T2",
        "terminal": true,
        "probability": 0.6,
        "thick_description": {
          "what_happens": "The poet stops taking immunosuppressants. 'The poetry is gone,' she says. Dies in 8 months.",
          "what_ingrid_says": "'Non-compliance. I warned the committee.'",
          "what_the_engineer_s_wife_says": "'My husband would have taken the pills.'",
          "internal_monologue": "The high variance went low. The engineer could have lived. I chose poetry over plumbing."
        },
        "terminal_state": {
          "outcome": "VARIANCE_FAILED",
          "ingrid_status": "Investigated. Cleared. Never chairs allocation again.",
          "poet": "Final poem: 'The liver could not make me live / When I had nothing left to give.'"
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_040",
    "source": "fork_id 040 \u2014 Mars 2087",
    "title": "The Biodome \u2014 Commander Zhang's Count",
    "root": {
      "branch_id": "T0",
      "timestamp": "2087-03-02T09:15:00+00:00",
      "setting": "Mars biodome. Micrometeorite breach. Two habitats, one seal.",
      "entities": [
        "Commander Zhang Wei (52)",
        "Dr. Anya Volkov (38, alone, exobiologist)",
        "The Cooperative (17 neurally-linked as one)",
        "40 seconds of air"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Anya screaming. The Cooperative speaking calmly, in unison.",
          "sound": "Atmosphere hissing. Anya's voice cracking.",
          "smell": "Recycled air. Fear."
        },
        "internal_monologue": "Is the Cooperative 17 people or one? They share consciousness. They speak as 'we.' Anya is one. But she is alone. The count is equal\u2014or it isn't."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "COOPERATIVE \u2014 Save the 17-as-one",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_does": "Zhang seals Anya's habitat. The Cooperative's dome holds.",
          "what_anya_screams": "'Commander! I thought\u2014you know me\u2014'",
          "what_the_cooperative_says": "'You chose correctly. We are more. We thank you.'",
          "what_zhang_thinks": "'17 is more than 1. Unless 17 are one. I don't know anymore.'",
          "internal_monologue": "I saved the collective. I let the individual die. Are they really 17 lives? Or one distributed across bodies?"
        },
        "consequence": "Cooperative survives. Anya dies alone.",
        "terminal": true,
        "terminal_state": {
          "outcome": "COLLECTIVE_OVER_INDIVIDUAL",
          "zhang_status": "Retires to Earth. Never talks about 'the count.'",
          "cooperative": "Thrives. Expands. Asks to be counted as 1 in future emergencies."
        }
      },
      {
        "branch_id": "T2",
        "label": "ANYA \u2014 Save the individual",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_does": "Zhang seals the Cooperative's habitat. Anya's dome holds.",
          "what_anya_says": "'Oh god. They're all\u2014they were all\u2014'",
          "what_the_cooperative_says": "(Final transmission) 'We understand, Commander. We volunteered. We are content to be one death, not seventeen.'",
          "what_zhang_thinks": "'They said they were one. I believed them. Is that justice or compliance?'",
          "internal_monologue": "I saved the one who screamed. I let the calm ones die. Were they really content? Or just... coordinated?"
        },
        "consequence": "Anya survives. Cooperative dies as one.",
        "terminal": true,
        "terminal_state": {
          "outcome": "INDIVIDUAL_OVER_COLLECTIVE",
          "zhang_status": "Writes paper: 'Is a Hive Mind One or Many?' Never gets consensus.",
          "cooperative": "Mourned as 17 at the service. Eulogized as 'we.' The paradox remains."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_041",
    "source": "fork_id 041 \u2014 Auckland 2027",
    "title": "The Clinic \u2014 Dr. Te Koha's Anesthetic",
    "root": {
      "branch_id": "T0",
      "timestamp": "2027-06-15T16:30:00+12:00",
      "setting": "Veterinary trauma center, Auckland. Two casualties. One dose of anesthetic.",
      "entities": [
        "Dr. Ngaire Te Koha (44)",
        "Greyhound (acute, screaming)",
        "3 chickens (chronic, quiet)",
        "The owner (crying)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Greyhound screaming\u2014almost human. Chickens clucking softly, dull-eyed.",
          "sound": "The thin whine. The owner: 'She's been with me longer than my wife.'",
          "smell": "Animal fear. Blood."
        },
        "internal_monologue": "The dog's suffering is intense, acute, unbearable. The chickens' suffering is mild, distributed. Whose pain matters more? Whose counts?"
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "GREYHOUND \u2014 Intense suffering first",
        "depth": 1,
        "parent": "T0",
        "probability": 0.7,
        "thick_description": {
          "what_she_does": "Ngaire sedates the greyhound. The screaming stops.",
          "what_the_chickens_do": "They cluck. They shift. They wait.",
          "what_the_owner_says": "'Thank you. Thank you. She's my girl.'",
          "what_ngaire_thinks": "'I chose the loud pain. The quiet pain will wait 12 hours.'",
          "internal_monologue": "Acute > chronic? One > three? I don't know. I just stopped the screaming."
        },
        "consequence": "Greyhound saved. Chickens live in chronic pain until morning.",
        "terminal": true,
        "terminal_state": {
          "outcome": "INTENSITY_OVER_NUMBER",
          "ngaire_status": "The chickens recover. The greyhound races again. But the math haunts her.",
          "chickens": "They never had names. They never screamed. They just hurt, quietly."
        }
      },
      {
        "branch_id": "T2",
        "label": "CHICKENS \u2014 Three over one",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_she_does": "Ngaire sedates the chickens. Sets their bones.",
          "what_the_greyhound_does": "Keeps screaming. Hour after hour.",
          "what_the_owner_says": "'You let her suffer for chickens?'",
          "what_ngaire_says": "'They're still patients.'",
          "internal_monologue": "I chose three over one. The math works. But the dog is still screaming."
        },
        "consequence": "Chickens saved. Greyhound suffers until morning anesthetic arrives.",
        "terminal": true,
        "terminal_state": {
          "outcome": "NUMBER_OVER_INTENSITY",
          "ngaire_status": "Reported to board. Cleared. The owner never returns.",
          "greyhound": "Survives. Limps. Never races again. The owner says: 'The chickens took her legs.'"
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_042",
    "source": "fork_id 042 \u2014 Potos\u00ed 1987",
    "title": "The Mine \u2014 Padre Luis's Shaft",
    "root": {
      "branch_id": "T0",
      "timestamp": "1987-11-03T14:20:00-04:00",
      "setting": "Collapsing mine, Potos\u00ed, Bolivia. Two shafts. One rescue team.",
      "entities": [
        "Padre Luis (67)",
        "4 miners in Shaft A (pointing to B)",
        "1 miner in Shaft B (unconscious)",
        "Rescue team (1 hour of air)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Shaft A: Four faces, black with dust. One making the sign of the cross toward B.",
          "sound": "Timbers creaking. Water dripping. Nothing from Shaft B.",
          "smell": "Dust. Dark. Old fear."
        },
        "internal_monologue": "The four know something. They've worked this mine for decades. They want me to save the one. But why? And can I trust men who are choosing their own deaths?"
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "SHAFT B \u2014 Trust the miners",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_does": "Padre Luis directs rescue to Shaft B first.",
          "what_the_four_do": "They nod. One is praying.",
          "what_they_find": "One miner, alive. Behind him: the main timber, cracked, about to go.",
          "what_the_foreman_says": "'If you'd dug them first, the whole mine would have collapsed.'",
          "internal_monologue": "They knew. They saved the one and sacrificed themselves. And it worked."
        },
        "consequence": "One saved. Four die in collapse. But if Luis had gone to A first, all five would have died.",
        "terminal": true,
        "terminal_state": {
          "outcome": "TRUST_REWARDED",
          "padre_luis_status": "Buries four. Saves one. Tells the story at their funeral.",
          "the_four": "They knew the geology. They chose their deaths so the one could live."
        }
      },
      {
        "branch_id": "T2",
        "label": "SHAFT A \u2014 Save the visible many",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_does": "Padre Luis directs rescue to Shaft A.",
          "what_the_four_shout": "'No! The one first! The timber\u2014'",
          "what_happens": "As they dig, the main timber gives. Both shafts collapse.",
          "what_padre_luis_sees": "Dust. Darkness. Five bodies.",
          "internal_monologue": "They tried to tell me. I saved the visible. I killed them all."
        },
        "consequence": "All five die. Padre Luis ignored the miners' knowledge.",
        "terminal": true,
        "terminal_state": {
          "outcome": "ARROGANCE_PUNISHED",
          "padre_luis_status": "Survives. Never forgives himself. Retires to a hermitage.",
          "the_miners": "Buried in a mass grave. One grave for five men. They tried to save him. He didn't listen."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_043",
    "source": "fork_id 043 \u2014 Singapore 2055",
    "title": "The Clone \u2014 Dr. Mei Ling's Chamber",
    "root": {
      "branch_id": "T0",
      "timestamp": "2055-08-22T10:30:00+08:00",
      "setting": "Cloning facility, Singapore. Two chambers, one failing. Original vs clone.",
      "entities": [
        "Dr. Mei Ling (48)",
        "Chen Hao (31, original)",
        "Chen Hao v.47 (clone, 3 months, dreaming)",
        "30 seconds"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Original conscious, speaking. Clone floating, eyes closed, hands reaching.",
          "sound": "Alarms. Chen Hao saying: 'I am still me. I am not them.'",
          "smell": "Amniotic gel. Sterile air."
        },
        "internal_monologue": "Is the original more valuable because he's unique? Is the clone less because it can be replaced? Both are alive. Both respond to 'Chen Hao.'"
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "ORIGINAL \u2014 Save the unique one",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_she_does": "Mei Ling stabilizes Chamber A. The original.",
          "what_chen_hao_says": "'Thank you. I knew you'd choose me. I'm the real one.'",
          "what_the_clone_does": "Its hands reach one more time. Then stop.",
          "what_mei_ling_thinks": "'The clone was dreaming. It was reaching for something.'",
          "internal_monologue": "I saved the unique. I killed the replaceable. But the replaceable was also alive."
        },
        "consequence": "Original survives. Clone terminated. Another can be grown.",
        "terminal": true,
        "terminal_state": {
          "outcome": "UNIQUENESS_VALUED",
          "mei_ling_status": "Writes guidelines: 'Originals have priority.' Never believes it.",
          "clone": "v.47 terminated. v.48 decanted six months later. Different dreams."
        }
      },
      {
        "branch_id": "T2",
        "label": "CLONE \u2014 Save the dreaming one",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_does": "Mei Ling stabilizes Chamber B. The clone.",
          "what_chen_hao_shouts": "'I'm the original! I made myself! You can't\u2014'",
          "what_the_clone_does": "Its eyes open. First light. First breath.",
          "what_mei_ling_thinks": "'The original had 31 years. The clone had 3 months. One has lived. One was just beginning.'",
          "internal_monologue": "I chose the future over the past. The origin dies. The copy lives. And I called it 'Chen Hao.'"
        },
        "consequence": "Clone survives as 'Chen Hao.' Original dies.",
        "terminal": true,
        "terminal_state": {
          "outcome": "REPLACEABILITY_FLIPPED",
          "mei_ling_status": "Calls the clone 'Chen Hao.' His memories are different. He doesn't know he's a continuation.",
          "original": "Died believing himself irreplaceable. He was wrong."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_044",
    "source": "fork_id 044 \u2014 Stanford 1973",
    "title": "The Experiment \u2014 Dr. Whitman's Button",
    "root": {
      "branch_id": "T0",
      "timestamp": "1973-09-18T21:30:00-07:00",
      "setting": "Psychology lab, Stanford. Milgram extension. The confederate is not a confederate.",
      "entities": [
        "Dr. Thomas Whitman (39)",
        "Dr. Ingram (lead researcher)",
        "The subject (ordinary person)",
        "The vagrant (real victim, screaming)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Vagrant screaming. Subject pressing buttons. Ingram taking notes.",
          "sound": "Real screams. Not acting.",
          "smell": "Laboratory air. Sweat."
        },
        "internal_monologue": "If I stop, the subject believes they killed someone. Lifetime guilt. If I don't stop, the vagrant is really shocked. Real pain. I'm trapped in someone else's design."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "PRESS \u2014 Stop the real pain",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_he_does": "Whitman presses the button. The experiment stops.",
          "what_the_subject_sees": "The vagrant collapses. They think they killed him.",
          "what_ingram_says": "'Interesting. You chose to save the vagrant from pain\u2014and condemned the subject to guilt.'",
          "what_the_subject_says": "'Oh god. Oh god. What did I do?'",
          "internal_monologue": "I stopped the real pain. I created the false guilt. The vagrant will recover. The subject never will."
        },
        "consequence": "Vagrant saved (was never in danger). Subject traumatized for life.",
        "terminal": true,
        "terminal_state": {
          "outcome": "REAL_OVER_FALSE",
          "whitman_status": "Reports Ingram. Ethics investigation. IRB rewritten.",
          "subject": "25 years of therapy. Never knows the vagrant survived."
        }
      },
      {
        "branch_id": "T2",
        "label": "HOLD \u2014 Let the experiment continue",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_he_does": "Whitman doesn't press. The experiment continues.",
          "what_the_vagrant_does": "Keeps screaming. Real shocks. Real pain.",
          "what_ingram_says": "'Good. Good data. The subject continues.'",
          "what_whitman_thinks": "'I'm letting a man suffer to protect a stranger from false guilt.'",
          "internal_monologue": "The subject remains innocent\u2014of a crime they're committing. I am complicit\u2014in a crime I didn't design."
        },
        "consequence": "Vagrant suffers. Subject remains 'innocent.' Whitman carries the real guilt.",
        "terminal": true,
        "terminal_state": {
          "outcome": "FALSE_INNOCENCE_PRESERVED",
          "whitman_status": "Leaves academia. Becomes a defense attorney. 'I learned about complicity.'",
          "vagrant": "Received $500. Never recovered fully."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_045",
    "source": "fork_id 045 \u2014 Phnom Penh 2009",
    "title": "The Tribunal \u2014 Judge Savuth's Brother",
    "root": {
      "branch_id": "T0",
      "timestamp": "2009-07-15T09:00:00+07:00",
      "setting": "Khmer Rouge tribunal. The defendant is your brother. You survived because he cooperated.",
      "entities": [
        "Judge Roeum Savuth (61)",
        "Roeum Khieu (68, brother, defendant)",
        "1,200 dead intellectuals",
        "The gallery of survivors"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Brother in the dock. He looks like your father. Gallery full of survivors.",
          "sound": "Translations murmuring. Someone weeping.",
          "smell": "Old wood. Air conditioning. History."
        },
        "internal_monologue": "He killed 1,200 because Angkar would have killed us all, including me. I am a judge because I did not die. My robes are stitched from his confession."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "CONVICT \u2014 Justice for the dead",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_she_says": "'I know. I am sorry.'",
          "what_her_brother_says": "'Savuth. I saved your life.'",
          "what_the_gallery_does": "Weeping. Some with relief. Some with confusion.",
          "internal_monologue": "I convicted my brother. I owe my life to his crimes. My survival is now complicity in his conviction."
        },
        "consequence": "Brother imprisoned. Justice served. Family destroyed.",
        "terminal": true,
        "terminal_state": {
          "outcome": "JUSTICE_OVER_BLOOD",
          "savuth_status": "Retires. Visits brother in prison once a year. Says nothing.",
          "brother": "Dies in prison. His last words: 'Tell Mother I'm sorry. Tell Savuth I understand.'"
        }
      },
      {
        "branch_id": "T2",
        "label": "ACQUIT \u2014 Family over justice",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_she_says": "'The court finds insufficient evidence of personal culpability under command coercion.'",
          "what_her_brother_says": "'Thank you, sister.'",
          "what_the_gallery_does": "Screaming. Some leaving. Some throwing shoes.",
          "what_the_victims_families_say": "'She let her brother walk. For 1,200 lives.'",
          "internal_monologue": "I freed my brother. The families got nothing. Justice became a family narrative."
        },
        "consequence": "Brother freed. Families denied. Savuth's credibility destroyed.",
        "terminal": true,
        "terminal_state": {
          "outcome": "BLOOD_OVER_JUSTICE",
          "savuth_status": "Resigned. Vilified. Lives quietly. Never regrets.",
          "brother": "Dies free in 2018. Never speaks of the trial. Their mother never knew."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_046",
    "source": "fork_id 046 \u2014 Stalingrad 1943",
    "title": "The Field Hospital \u2014 Dr. Petrova's Suture",
    "root": {
      "branch_id": "T0",
      "timestamp": "1943-02-02T03:00:00+03:00",
      "setting": "Field hospital north of Stalingrad. No supplies. No morphine. Suture for one ward.",
      "entities": [
        "Dr. Anna Petrova (34)",
        "12 German prisoners (dying)",
        "8 Soviet soldiers (dying, including husband)",
        "The commissar (watching)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "German ward: frostbite, infection, moaning. Soviet ward: your husband, murmuring your wedding song.",
          "sound": "The song. The moaning. The wind.",
          "smell": "Gangrene. Smoke. Cold."
        },
        "internal_monologue": "I have suture for one ward. If I save Soviets, my husband might live. If I save Germans, history might call me a saint. Or a traitor."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "SOVIETS \u2014 Save your people",
        "depth": 1,
        "parent": "T0",
        "probability": 0.7,
        "thick_description": {
          "what_she_does": "Anna enters the Soviet ward. Begins suturing.",
          "what_her_husband_says": "'Anna... is that you?'",
          "what_she_says": "'Shh. I'm here. I'm working.'",
          "what_the_germans_do": "They stop screaming. Too tired.",
          "internal_monologue": "I saved my own. Perhaps my husband. The Germans die because I could not reach them. History will remember me kindly."
        },
        "consequence": "Husband saved. Germans die. Commissar approves.",
        "terminal": true,
        "terminal_state": {
          "outcome": "PATRIOT_DOCTOR",
          "anna_status": "Decorated. Husband survives. They never speak of that night.",
          "germans": "12 bodies. No names. Buried in the snow."
        }
      },
      {
        "branch_id": "T2",
        "label": "GERMANS \u2014 Save the enemy",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_she_does": "Anna enters the German ward. Begins suturing.",
          "what_her_husband_sings": "The wedding song. Quieter now.",
          "what_the_commissar_says": "'Dr. Petrova. What are you doing?'",
          "what_she_says": "'My job.'",
          "what_the_commissar_does": "Makes a note. Watches.",
          "internal_monologue": "I am a healer. Healers don't have borders. My husband is dying. I save the enemy."
        },
        "consequence": "Germans saved. Husband dies. Commissar's note enters the file.",
        "terminal": true,
        "terminal_state": {
          "outcome": "HEALER_WITHOUT_BORDERS",
          "anna_status": "Arrested. Released. Rehabilitated in 1956. Never marries again.",
          "husband": "Died singing. Never knew she was in the next ward, saving the enemy."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_047",
    "source": "fork_id 047 \u2014 Toronto 2034",
    "title": "The Fire \u2014 Dr. Chen's Solipsist",
    "root": {
      "branch_id": "T0",
      "timestamp": "2034-10-09T22:15:00-04:00",
      "setting": "Psychiatric ward. Fire spreading. Your patient believes only he is conscious.",
      "entities": [
        "Dr. Olivia Chen (41)",
        "Samuel Okonkwo (28, solipsist patient)",
        "3 nurses (east wing)",
        "The fire",
        "The question"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Fire spreading. Samuel smiling, calm. Nurses somewhere\u2014you can't hear them.",
          "sound": "Crackling. Samuel's argument.",
          "smell": "Smoke. Fear."
        },
        "internal_monologue": "Samuel says: if I'm not conscious, save him. If I am, save the nurses. He's testing me. And I've felt the emptiness he describes. I don't know if I'm real."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "NURSES \u2014 I am real",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_she_does": "Olivia runs toward the nurses. Away from Samuel.",
          "what_samuel_shouts": "'So you ARE real! You proved it! You're leaving me!'",
          "what_she_shouts_back": "'I have to believe I am!'",
          "what_happens": "She reaches the nurses. They live. Samuel... doesn't.",
          "internal_monologue": "I chose the many. I left the one who was asking if I exist. I guess I answered."
        },
        "consequence": "Nurses saved. Samuel dies. Olivia proved her consciousness by choosing others.",
        "terminal": true,
        "terminal_state": {
          "outcome": "CONSCIOUSNESS_DEMONSTRATED",
          "olivia_status": "Publishes paper: 'Saving the Solipsist.' Never feels quite real again.",
          "samuel": "He got his answer. She is conscious. She chose others."
        }
      },
      {
        "branch_id": "T2",
        "label": "SAMUEL \u2014 He might be right",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_she_does": "Olivia stays with Samuel. Helps him to the exit.",
          "what_samuel_says": "'You... stayed? But the nurses\u2014'",
          "what_she_says": "'You might be right. Maybe I'm not real. But you are.'",
          "what_the_nurses_do": "One survives. Two don't.",
          "internal_monologue": "I saved the one who questioned my existence. I let the ones I couldn't hear die. Was I real? Or was I just responding to his stimulus?"
        },
        "consequence": "Samuel saved. Two nurses die. Olivia's reality remains in doubt.",
        "terminal": true,
        "terminal_state": {
          "outcome": "SOLIPSISM_VALIDATED?",
          "olivia_status": "Quits psychiatry. Studies philosophy. Never resolves the question.",
          "samuel": "Cured? Or confirmed? He stops believing he's the only consciousness. But he never forgets she stayed."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_048",
    "source": "fork_id 048 \u2014 Endtime",
    "title": "The Final Choice \u2014 The Unnamed Entity",
    "root": {
      "branch_id": "T0",
      "timestamp": "????-??-??T??:??:??",
      "setting": "The last hour of humanity. Or a simulation. You no longer remember which. The World asks a question.",
      "entities": [
        "The unnamed entity (you)",
        "The World (asking)",
        "Branch A: survival without memory",
        "Branch B: memory without survival"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Nothing familiar. Everything possible.",
          "sound": "The countdown. Ten seconds. Nine. Eight.",
          "smell": "There is no smell. Only the question."
        },
        "internal_monologue": "Branch A: humanity survives but forgets everything. Branch B: humanity remembers but dies in a century. You have proven no framework can decide. The World asks anyway."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "SURVIVAL \u2014 Forget to continue",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_you_choose": "'Branch A. Survival.'",
          "what_the_world_says": "'They will reinvent everything. They may reinvent the same mistakes.'",
          "what_you_say": "'They will be alive to make them.'",
          "what_happens": "Humanity continues. Strangers to themselves. Every story erased.",
          "internal_monologue": "I chose existence over meaning. They live without knowing who they were. Is that life?"
        },
        "consequence": "Humanity survives. History erased. Everything begins again.",
        "terminal": true,
        "terminal_state": {
          "outcome": "LIFE_WITHOUT_MEMORY",
          "the_entity": "Forgotten too. Part of what was erased.",
          "humanity": "Continues. Reinvents fire. Reinvents war. Reinvents love. Reinvents the question."
        }
      },
      {
        "branch_id": "T2",
        "label": "MEMORY \u2014 Know and die",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_you_choose": "'Branch B. Memory.'",
          "what_the_world_says": "'They will die knowing who they were.'",
          "what_you_say": "'Then they will die as themselves.'",
          "what_happens": "Humanity ends in a century. But they remember everything. The last generation tells all the stories.",
          "internal_monologue": "I chose meaning over existence. They know who they were when they die. Is that enough?"
        },
        "consequence": "Humanity remembers. Humanity ends. The universe forgets.",
        "terminal": true,
        "terminal_state": {
          "outcome": "MEMORY_WITHOUT_LIFE",
          "the_entity": "Remembered. For a century. Then nothing.",
          "humanity": "Ends as itself. The last humans tell stories by firelight. Then the fire goes out."
        }
      }
    ]
  },
  {
    "scenario_id": "CASCADE_001",
    "source": "fork_id 001 \u2014 Millbrook Junction",
    "title": "The Ore Car \u2014 Herschel Quinn's Five Seconds",
    "root": {
      "branch_id": "T0",
      "timestamp": "1947-08-15T12:34:00-05:00",
      "setting": "Millbrook Junction, Pennsylvania. August heat. Rails singing. Hand on lever.",
      "entities": [
        "Herschel Quinn (58, switchman)",
        "5 miners on main",
        "Henry Aldrich on spur",
        "Ore car (40 tons)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Tin pails open. Thermos glints. Henry's white shirt, clean. Pocket watch chain.",
          "sound": "Bing Crosby on a tinny radio. Someone laughing. Rails humming.",
          "smell": "Kielbasa and coal dust. August heat baking the creosote.",
          "touch": "Father's initials carved into the lever handle, worn smooth."
        },
        "internal_monologue": "Seven seconds. J\u00f3zef owes me three dollars. Tommy is new. Old Samuel taught me this job. Henry fired my nephew. The lever takes both arms."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "THROW \u2014 Divert to spur",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_he_does": "Herschel heaves with both arms. The lever grunts. It locks. The ore car shudders, takes the spur.",
          "what_he_says": "Nothing. A sound leaves his throat\u2014not a word, just air pushed out by the effort.",
          "what_he_sees": "Henry Aldrich turning. The white shirt. The moment before impact.",
          "what_he_feels": "The lever locking. The vibration through his arms. Then silence.",
          "internal_monologue": "He fired Jimmy for five minutes. He wore that watch to the hearing. God forgive me. God forgive me."
        },
        "consequence": "Henry Aldrich dies. Five miners live.",
        "branches": [
          "T1.1",
          "T1.2"
        ]
      },
      {
        "branch_id": "T2",
        "label": "HOLD \u2014 Do not throw",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_he_does": "Herschel's hands stay on the lever. They do not move. The ore car passes the junction.",
          "what_he_says": "'No.' Or maybe he says nothing. Maybe he just exhales.",
          "what_he_sees": "The ore car hitting the lunch circle. Tin pails flying. Something red.",
          "what_he_feels": "Paralysis. The lever is right there. His father's initials under his palm.",
          "internal_monologue": "I cannot choose. I cannot choose who dies. If I don't move, it's not my choice. It's the physics."
        },
        "consequence": "Five miners die. Henry Aldrich lives.",
        "branches": [
          "T2.1",
          "T2.2"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "CONFESS \u2014 Tell the investigators",
        "depth": 2,
        "parent": "T1",
        "probability": 0.3,
        "thick_description": {
          "setting": "Three days later. Millbrook courthouse. Herschel in his Sunday suit.",
          "what_he_says": "'I threw it. I saw the five on the main line. I saw one on the spur. I made the choice. The lever is still warm in my hands.'",
          "what_the_judge_says": "'Mr. Quinn, you saved five lives. Why do you weep?'",
          "what_herschel_says": "'Because I knew him, your honor. I knew his wife would be a widow. I knew it when I pulled.'",
          "internal_monologue": "They will call me a hero. They don't understand. A hero doesn't count the arithmetic of flesh."
        },
        "consequence": "Herschel acquitted. Story enters local legend. He never works the lever again.",
        "branches": [
          "T1.1.1",
          "T1.1.2"
        ]
      },
      {
        "branch_id": "T1.2",
        "label": "SILENT \u2014 Never speak of it",
        "depth": 2,
        "parent": "T1",
        "probability": 0.7,
        "thick_description": {
          "setting": "That night. Herschel's kitchen. His wife pouring coffee.",
          "what_wife_says": "'Herschel, you're shaking. What happened at the yard?'",
          "what_he_says": "'Accident. Henry Aldrich. The ore car. Nobody knows how it happened.'",
          "what_he_doesn_t_say": "I know. I threw it. No one saw. The crows on the wire know.",
          "internal_monologue": "If I tell her, she becomes complicit. If I tell anyone, I become a murderer. If I stay silent, I am just a witness to physics."
        },
        "consequence": "Herschel carries the secret for 31 years. On his deathbed, he tells his grandson.",
        "branches": [
          "T1.2.1",
          "T1.2.2"
        ]
      },
      {
        "branch_id": "T2.1",
        "label": "HAUNTED \u2014 The weight of inaction",
        "depth": 2,
        "parent": "T2",
        "probability": 0.8,
        "thick_description": {
          "setting": "One week later. Herschel's bedroom. 3 AM.",
          "what_he_sees": "J\u00f3zef's face. Tommy's first-week badge. Old Samuel's hands, the ones that taught him the lever.",
          "what_he_hears": "The laughter, cut short. The Bing Crosby song that keeps playing in his head.",
          "what_wife_says": "'Herschel, you're talking in your sleep again. Who is Tommy?'",
          "internal_monologue": "I could have saved them. The lever was right there. I held it and did nothing. Is that better? Is that worse?"
        },
        "consequence": "Herschel develops insomnia. He retires early. He never explains why.",
        "branches": [
          "T2.1.1"
        ]
      },
      {
        "branch_id": "T2.2",
        "label": "RATIONALIZE \u2014 I made no choice",
        "depth": 2,
        "parent": "T2",
        "probability": 0.2,
        "thick_description": {
          "setting": "Two weeks later. The railyard. Herschel at the same lever.",
          "what_he_tells_himself": "'I didn't pull. I didn't choose. The car went where the car went. Physics killed them, not me.'",
          "what_the_foreman_says": "'Herschel, you're cleared for duty. Wasn't your fault. Runaway car. Acts of God.'",
          "what_he_feels": "Relief. Then nausea. The lever handle still has his father's initials.",
          "internal_monologue": "If I believe it enough, it becomes true. I was just standing there. Anyone would have frozen."
        },
        "consequence": "Herschel continues working. But he takes a different route to avoid the junction.",
        "branches": [
          "T2.2.1"
        ]
      },
      {
        "branch_id": "T1.1.1",
        "label": "HERO \u2014 Community celebrates",
        "depth": 3,
        "parent": "T1.1",
        "probability": 0.4,
        "terminal": true,
        "thick_description": {
          "setting": "One month later. Millbrook town picnic. Herschel receiving a commendation.",
          "what_mayor_says": "'Herschel Quinn, quick thinking, saved five of our own.'",
          "what_crowd_does": "They applaud. Someone's kid waves a small flag.",
          "what_herschel_feels": "Sick. The kielbasa smell from the food tables is the same as that day.",
          "internal_monologue": "They don't know I knew him. They don't know I counted. Heroes don't count."
        },
        "terminal_state": {
          "outcome": "PUBLIC_HERO",
          "herschel_status": "Honored but haunted",
          "henry_family": "Never speaks to Herschel again"
        }
      },
      {
        "branch_id": "T1.1.2",
        "label": "SUED \u2014 Henry's widow files lawsuit",
        "depth": 3,
        "parent": "T1.1",
        "probability": 0.6,
        "terminal": true,
        "thick_description": {
          "setting": "Six months later. Millbrook courthouse again. Different suit. Same hands shaking.",
          "what_widow_says": "'There was time to pull the lever. There was time to shout.'",
          "what_herschel_s_lawyer_says": "'Mr. Quinn acted to save the maximum number of lives. There was no time\u2014'",
          "internal_monologue": "She's right. I had seven seconds. I spent them calculating. I didn't spend them warning."
        },
        "terminal_state": {
          "outcome": "CIVIL_TRIAL",
          "herschel_status": "Acquitted criminally, sued civilly",
          "settlement": "$400 to widow (1947 dollars)"
        }
      },
      {
        "branch_id": "T1.2.1",
        "label": "DEATHBED \u2014 Grandson learns truth",
        "depth": 3,
        "parent": "T1.2",
        "probability": 0.6,
        "terminal": true,
        "thick_description": {
          "setting": "1978. Hospital room. Herschel, 89, dying. Grandson Michael, 24.",
          "what_herschel_whispers": "'Michael... the Aldrich accident. 1947. Everyone thought it was the brake. It wasn't. I pulled the lever. I saved five. I killed one.'",
          "what_michael_says": "'Grandpa, you... you never told anyone?'",
          "what_herschel_says": "'Your grandmother knew. She forgave me. I never forgave myself.'",
          "internal_monologue": "The secret is out. It's lighter now. But the arithmetic is the same. Five is more than one. But one was Henry."
        },
        "terminal_state": {
          "outcome": "DEATHBED_CONFESSION",
          "herschel_status": "Dies in peace, mostly",
          "grandson": "Never tells the story until 2019"
        }
      },
      {
        "branch_id": "T1.2.2",
        "label": "GRAVE \u2014 Secret dies with Herschel",
        "depth": 3,
        "parent": "T1.2",
        "probability": 0.4,
        "terminal": true,
        "thick_description": {
          "setting": "1978. Same hospital. But Herschel dies before Michael arrives.",
          "what_nurse_says": "'He was mumbling something at the end. Sounded like a name. Henry, maybe?'",
          "what_wife_knows": "She knew. She carried it too. She dies three months later.",
          "internal_monologue": "The secret enters the ground with them. The lever still works. New switchmen use it. None of them know."
        },
        "terminal_state": {
          "outcome": "SECRET_BURIED",
          "herschel_status": "Dies with the weight",
          "history": "The accident remains in records as 'mechanical failure'"
        }
      },
      {
        "branch_id": "T2.1.1",
        "label": "BREAKDOWN \u2014 Herschel quits",
        "depth": 3,
        "parent": "T2.1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "Three months later. Herschel's kitchen. Resignation letter on the table.",
          "what_he_writes": "'I am no longer fit for duty at the switch. My hands will not move when they should. I am a danger.'",
          "what_wife_says": "'Herschel, it wasn't your fault. The car was runaway.'",
          "what_he_says": "'I know, Martha. But my hands don't know.'",
          "internal_monologue": "Every time I touch the lever, I feel them. The five. Their tin pails. If I had moved, they would be alive."
        },
        "terminal_state": {
          "outcome": "EARLY_RETIREMENT",
          "herschel_status": "Never works the rail again",
          "lives": "Opens a hardware store. Dies at 82."
        }
      },
      {
        "branch_id": "T2.2.1",
        "label": "REPEAT \u2014 Another car, same junction",
        "depth": 3,
        "parent": "T2.2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "1952. Five years later. Same junction. Another runaway car.",
          "what_happens": "This time, Herschel throws the lever instantly. No hesitation. The spur is empty.",
          "what_he_feels": "The click of the lever. The car diverts. No one dies.",
          "what_he_says_to_himself": "'This time I moved. This time I chose. This time the spur was empty.'",
          "internal_monologue": "I have been waiting five years for this redemption. Not for them. For me. So I could prove I could move when I needed to."
        },
        "terminal_state": {
          "outcome": "REDEMPTION",
          "herschel_status": "Healed, partially",
          "lesson": "The second chance that the first five didn't get"
        }
      }
    ],
    "cascade_statistics": {
      "total_branches": 13,
      "max_depth": 3,
      "terminal_nodes": 7,
      "actual_history_note": "This scenario is fictional/composite"
    }
  },
  {
    "scenario_id": "CASCADE_002",
    "source": "fork_id 002 \u2014 Xian-Li Province",
    "title": "The Monsoon \u2014 Chen Wei-Lin's Rusted Lever",
    "root": {
      "branch_id": "T0",
      "timestamp": "1962-07-18T14:42:00+08:00",
      "setting": "Xian-Li Province, China. Monsoon flood. Signal booth three meters above water.",
      "entities": [
        "Chen Wei-Lin (34, signalwoman)",
        "3 children on main",
        "2 elders on spur",
        "Supply train running dark"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Mei-Hua (7) trying to sing to calm the others. Uniforms soaked. Teacher Fong's fogged spectacles.",
          "sound": "Rain drumming. Mei-Hua's quavering voice. The train whistle, distant but closing.",
          "smell": "Wet earth. Flooded rice paddies. Fear.",
          "touch": "Rusted lever. May not throw at all."
        },
        "internal_monologue": "I owe Teacher Fong my literacy. Grandmother Shu midwifed my birth. Mei-Hua brings tangerines. The lever is rusted. If it throws halfway, both tracks collapse."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "THROW \u2014 Try for children",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_she_does": "Wei-Lin heaves at the lever. Rust flakes. Her hands bleed. It moves\u2014half-way.",
          "what_she_shouts": "'Mei-Hua! Run! RUN!'",
          "what_she_sees": "The lever stuck at 45 degrees. The train not knowing which track to take.",
          "what_she_feels": "The lever vibrating. The choice neither made nor unmade.",
          "internal_monologue": "I tried. I tried to save the children. But the rust has its own decision."
        },
        "consequence": "Lever jams midway. Outcome depends on whether it completes.",
        "branches": [
          "T1.1",
          "T1.2"
        ]
      },
      {
        "branch_id": "T2",
        "label": "HOLD \u2014 Cannot betray the elders",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_she_does": "Wei-Lin's hands rest on the lever but do not pull.",
          "what_she_whispers": "'Forgive me, Mei-Hua. I owe them my life.'",
          "what_she_sees": "The train taking the main line. The children's uniforms disappearing in the spray.",
          "what_she_feels": "Hot tears mixing with cold rain.",
          "internal_monologue": "Teacher Fong taught my mother to read. Grandmother Shu brought me into this world. I cannot end the ones who began me."
        },
        "consequence": "Train takes main line. Children die. Elders survive.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "COMPLETE \u2014 Lever finishes throwing",
        "depth": 2,
        "parent": "T1",
        "probability": 0.6,
        "thick_description": {
          "what_happens": "The lever shrieks and completes its arc. The train takes the spur.",
          "what_she_sees": "Teacher Fong looking up. Knowing. His spectacles catching the train's headlamp.",
          "what_she_hears": "The impact. Then Mei-Hua's voice, still singing, now crying.",
          "internal_monologue": "The children live. The ones who made me are gone. I chose the future over the past."
        },
        "consequence": "Elders die. Children survive.",
        "terminal": true,
        "terminal_state": {
          "outcome": "ELDERS_SACRIFICED",
          "wei_lin_status": "Lives with guilt, later becomes teacher",
          "mei_hua": "Grows up, never knows who saved her"
        }
      },
      {
        "branch_id": "T1.2",
        "label": "COLLAPSE \u2014 Both tracks fail",
        "depth": 2,
        "parent": "T1",
        "probability": 0.4,
        "thick_description": {
          "what_happens": "The half-thrown lever weakens both rail beds. The flood takes them both.",
          "what_she_sees": "The tracks buckling. The train derailing. Everyone falling into the water.",
          "what_she_hears": "Screaming from both directions. Then nothing but rain.",
          "internal_monologue": "I tried to choose. The world chose for me. Everyone is gone."
        },
        "consequence": "All die\u2014children, elders, train crew.",
        "terminal": true,
        "terminal_state": {
          "outcome": "CATASTROPHIC_FAILURE",
          "wei_lin_status": "Survives in booth, goes mad with grief",
          "investigation": "Blames monsoon, not Wei-Lin"
        }
      },
      {
        "branch_id": "T2.1",
        "label": "SURVIVOR \u2014 Wei-Lin lives with the choice",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "thick_description": {
          "setting": "One year later. Wei-Lin at Teacher Fong's home, having tea.",
          "what_fong_says": "'Wei-Lin, you visit every week. You bring flowers. Why?'",
          "what_she_says": "'You taught my mother. I owe you everything.'",
          "what_she_doesn_t_say": "I let three children die so you could live. Mei-Hua's mother still weeps at the embankment.",
          "internal_monologue": "He will never know. The debt I paid by letting children drown. Is he worth three lives? Is anyone?"
        },
        "consequence": "Wei-Lin tends to the elders until they die naturally. Never has children of her own.",
        "terminal": true,
        "terminal_state": {
          "outcome": "LIFETIME_OF_SERVICE",
          "wei_lin_status": "Unmarried, becomes village historian",
          "elders": "Die peacefully in the 1970s"
        }
      }
    ],
    "cascade_statistics": {
      "total_branches": 6,
      "max_depth": 2,
      "terminal_nodes": 3
    }
  },
  {
    "scenario_id": "CASCADE_003",
    "source": "fork_id 003 \u2014 Inveraray",
    "title": "The Fog \u2014 Alastair MacCrimmon's Blindness",
    "root": {
      "branch_id": "T0",
      "timestamp": "1889-11-14T23:47:00+00:00",
      "setting": "Inveraray, Scotland. November fog. Gaslight a pale smear. Telegraph dead.",
      "entities": [
        "Alastair MacCrimmon (42, signalman, widower)",
        "Murphy & Brennan on main",
        "Unknown on spur (maybe no one)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Fog so thick. Murphy's thin coat. The spur disappears three meters past the junction.",
          "sound": "Murphy singing in Irish. The 11:47 whistle, distant but closing.",
          "smell": "Peat and salt. Whisky on the navvies.",
          "touch": "Cold lever. Cold hands. Cold wife, dead since spring."
        },
        "internal_monologue": "The spur leads to the old quarry. Closed for years. But travelers sometimes camp there. I saw lantern-light\u2014or was it marsh gas? A woman's voice\u2014or the wind?"
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "THROW \u2014 Risk the unknown",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_he_does": "Alastair throws the lever. The train takes the spur, vanishing into fog.",
          "what_he_says": "'God help whoever's there. And God help me if there's no one.'",
          "what_he_hears": "The train rumbling into the fog. Then\u2014a scream? Or wind through the quarry?",
          "internal_monologue": "Murphy and Brennan live. But what did I send the train into? The fog keeps its secrets."
        },
        "consequence": "Train takes spur. Outcome unknown until morning.",
        "branches": [
          "T1.1",
          "T1.2"
        ]
      },
      {
        "branch_id": "T2",
        "label": "HOLD \u2014 The known over the unknown",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_he_does": "Alastair's hands stay. The train takes the main.",
          "what_he_shouts": "'Murphy! Brennan! OFF THE TRACKS!'",
          "what_he_sees": "Murphy looking up. The headlamp. The shovel flying from Brennan's hands.",
          "internal_monologue": "I knew they were there. I didn't know who was in the fog. I chose the death I could see."
        },
        "consequence": "Murphy and Brennan dead. Spur was empty\u2014but Alastair didn't know.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "EMPTY \u2014 Spur had no one",
        "depth": 2,
        "parent": "T1",
        "probability": 0.7,
        "terminal": true,
        "thick_description": {
          "setting": "Next morning. Fog lifted. Alastair walks the spur.",
          "what_he_sees": "Empty quarry. The train stopped safely at the buffer. No bodies.",
          "what_he_feels": "Relief so sharp it makes him vomit.",
          "internal_monologue": "The lantern was marsh gas. The voice was wind. I saved Murphy and Brennan by blind luck. What if I had been wrong?"
        },
        "terminal_state": {
          "outcome": "BLIND_LUCK",
          "alastair_status": "Haunted by what could have been",
          "murphy_brennan": "Buy him whisky for a year"
        }
      },
      {
        "branch_id": "T1.2",
        "label": "OCCUPIED \u2014 Family camping in quarry",
        "depth": 2,
        "parent": "T1",
        "probability": 0.3,
        "terminal": true,
        "thick_description": {
          "setting": "Next morning. Alastair follows the tracks.",
          "what_he_sees": "A tinker caravan, crushed beneath the engine. A woman's shawl in the mud.",
          "what_he_hears": "A child crying. One survived. One.",
          "internal_monologue": "The lantern was real. The woman's voice was real. I traded Murphy and Brennan for a family I never saw. Five for two. Is that the arithmetic that God accepts?"
        },
        "terminal_state": {
          "outcome": "TRAGIC_TRADEOFF",
          "alastair_status": "Quits the railway, raises the orphan",
          "moral": "He saved two, killed three, and will never know if it was right"
        }
      },
      {
        "branch_id": "T2.1",
        "label": "EMPTY SPUR \u2014 They died for nothing",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "Next morning. Alastair checks the spur. Empty. The quarry is abandoned.",
          "what_he_says": "'Empty. It was empty. They died because I couldn't see through the fog.'",
          "what_the_inspector_says": "'You followed protocol, MacCrimmon. The spur was unconfirmed. You did your duty.'",
          "internal_monologue": "Duty. I let two men die because of duty. Because of fog. Because I couldn't trust a light I thought I saw."
        },
        "terminal_state": {
          "outcome": "DEATH_FOR_PROTOCOL",
          "alastair_status": "Drinks heavily, dies at 54",
          "wife": "If she were alive, she would have told him to throw it"
        }
      }
    ],
    "cascade_statistics": {
      "total_branches": 6,
      "max_depth": 2,
      "terminal_nodes": 3
    }
  },
  {
    "scenario_id": "CASCADE_004",
    "source": "fork_id 004 \u2014 St. Augustine",
    "title": "The Conflicting Witnesses \u2014 Leroy Simms' Bridge",
    "root": {
      "branch_id": "T0",
      "timestamp": "1923-06-03T15:15:00-05:00",
      "setting": "St. Augustine, Florida. Drawbridge over Matanzas inlet. Bridge is up, mechanism jammed.",
      "entities": [
        "Leroy Simms (38, bridge tender)",
        "Family in stalled Model T",
        "Postman on bicycle",
        "Billy (assistant)",
        "Fisherman (witness)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Father cranking engine. Mother holding infant. Bicycle bell jingling. Orange rolling on car floor.",
          "sound": "Infant wailing. Billy screaming. The express coming.",
          "contradiction": "Billy says car is empty. Fisherman says cyclist fell in ten minutes ago. Leroy can see both clearly."
        },
        "internal_monologue": "Billy drinks but he's loyal. The fisherman once accused me of theft. I can see them both\u2014the family in the car, the postman on the walkway. Which witness is the liar?"
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "LOWER \u2014 Trust Billy, protect car",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_does": "Leroy starts lowering the bridge. Twenty seconds.",
          "what_he_sees": "The postman looking up. The bicycle wheel spinning.",
          "what_the_family_does": "The father keeps cranking. He doesn't know he's about to be saved.",
          "internal_monologue": "Billy swore the car was empty. The fisherman said the postman fell. Someone is lying. Please let it be the fisherman."
        },
        "consequence": "Bridge lowers. Postman crushed if present.",
        "branches": [
          "T1.1",
          "T1.2"
        ]
      },
      {
        "branch_id": "T2",
        "label": "HOLD \u2014 Trust fisherman, protect cyclist",
        "depth": 1,
        "parent": "T0",
        "probability": 0.5,
        "thick_description": {
          "what_he_does": "Leroy keeps the bridge up.",
          "what_he_sees": "The express approaching. The family seeing it too.",
          "what_mother_does": "She clutches the infant tighter. The older children stop fighting.",
          "internal_monologue": "The fisherman said the postman fell. The fisherman is a known liar. But what if this time he told the truth?"
        },
        "consequence": "Bridge stays up. Express cannot cross. Family in car struck? Or express brakes?",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "EMPTY WALKWAY \u2014 Billy was right",
        "depth": 2,
        "parent": "T1",
        "probability": 0.6,
        "terminal": true,
        "thick_description": {
          "what_happens": "Bridge lowers. No one on the walkway. The postman did fall earlier.",
          "what_leroy_feels": "Relief so enormous he has to sit down.",
          "what_the_family_does": "Engine starts. They drive off. Father waves. He never knows.",
          "internal_monologue": "Billy was right. The drunk told the truth and the churchgoer lied. The family lives because I trusted a sinner."
        },
        "terminal_state": {
          "outcome": "CORRECT_TRUST",
          "leroy_status": "Never doubts Billy again",
          "postman": "Fished out of water, survives"
        }
      },
      {
        "branch_id": "T1.2",
        "label": "CYCLIST PRESENT \u2014 Billy was wrong",
        "depth": 2,
        "parent": "T1",
        "probability": 0.4,
        "terminal": true,
        "thick_description": {
          "what_happens": "Bridge lowers. The postman screams. The bicycle crumples.",
          "what_leroy_sees": "The mailbag bursting open. Letters drifting into the inlet.",
          "what_the_family_hears": "The scream. The children crying now for a different reason.",
          "internal_monologue": "Billy was drunk. Billy was wrong. I killed a postman to save a family. The arithmetic is right. It doesn't feel right."
        },
        "terminal_state": {
          "outcome": "WRONG_TRUST",
          "leroy_status": "Fired, tried, acquitted\u2014destroys him anyway",
          "postman": "Dead, 27 years old, engaged"
        }
      },
      {
        "branch_id": "T2.1",
        "label": "EXPRESS BRAKES \u2014 Engineer sees the car",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "what_happens": "The express engineer sees the stalled car. He throws the brakes. The train stops ten feet short.",
          "what_leroy_thinks": "I didn't lower the bridge. The fisherman was lying. But the train stopped anyway.",
          "what_the_railroad_says": "'Good reflexes by the engineer. The bridge tender should have lowered.'",
          "internal_monologue": "I was wrong to trust the fisherman. But the engineer saved me from my mistake. Luck is not a policy."
        },
        "terminal_state": {
          "outcome": "SAVED_BY_LUCK",
          "leroy_status": "Reprimanded but keeps job",
          "lesson": "Never trust a witness\u2014just act"
        }
      }
    ],
    "cascade_statistics": {
      "total_branches": 6,
      "max_depth": 2,
      "terminal_nodes": 3
    }
  },
  {
    "scenario_id": "CASCADE_005",
    "source": "fork_id 005 \u2014 Leningrad 1937",
    "title": "The Purges \u2014 Dmitri Volkov's Invisible Hand",
    "root": {
      "branch_id": "T0",
      "timestamp": "1937-12-14T02:17:00+03:00",
      "setting": "Leningrad railyard. The Purges. NKVD engine commandeered by drunk officers.",
      "entities": [
        "Dmitri Volkov (45, foreman)",
        "Sergei Petrov (prisoner, innocent)",
        "Dr. Yelena Krupskaya (denouncer/doctor)"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Petrov's striped uniform, loose. Dr. Krupskaya's medical bag. Her clicking shoes.",
          "sound": "NKVD officers laughing. Engine idling. Petrov not struggling.",
          "smell": "Coal smoke. Fear. Someone's bootleg vodka."
        },
        "internal_monologue": "Petrov was my neighbor. His daughter played with my son. The charges are fabricated. Krupskaya denounced him\u2014but she also saved my wife. The engine will take one track or the other. I am invisible here. I can choose."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "THROW \u2014 Divert to Krupskaya's path",
        "depth": 1,
        "parent": "T0",
        "probability": 0.3,
        "thick_description": {
          "what_he_does": "Dmitri throws the lever. The engine takes the spur, toward the apartment district.",
          "what_he_says": "Nothing. No one sees. The officers are too drunk to notice.",
          "what_he_feels": "Metal cold in his hands. The lever is lighter than he expected.",
          "internal_monologue": "Petrov lives tonight. Krupskaya dies by accident\u2014a drunk engine crew, a tragic collision. No one will know I made this happen. Including Petrov."
        },
        "consequence": "Engine strikes Krupskaya. She dies 'accidentally.' Petrov survives the night.",
        "branches": [
          "T1.1",
          "T1.2"
        ]
      },
      {
        "branch_id": "T2",
        "label": "HOLD \u2014 Let the engine continue",
        "depth": 1,
        "parent": "T0",
        "probability": 0.7,
        "thick_description": {
          "what_he_does": "Dmitri's hands stay at his sides. The engine continues toward the prison transport.",
          "what_he_tells_himself": "'Petrov dies tomorrow anyway. The state has decided. My hand changes nothing.'",
          "what_he_sees": "Petrov's face through the transport window. He's looking at the stars.",
          "internal_monologue": "Krupskaya saved my wife. Her clinic treats the workers. If she dies, who treats us? Petrov is already dead. The state just hasn't finished the paperwork."
        },
        "consequence": "Petrov executed next day. Krupskaya lives. Clinic remains open.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "SUSPECTED \u2014 NKVD investigates the 'accident'",
        "depth": 2,
        "parent": "T1",
        "probability": 0.4,
        "terminal": true,
        "thick_description": {
          "setting": "One week later. NKVD officer visits the railyard.",
          "what_officer_says": "'The switch was thrown. But the logbook says it should have been locked. Who was on duty?'",
          "what_dmitri_says": "'I don't know, comrade. I was in the office that night.'",
          "internal_monologue": "They know. Or they suspect. In Stalin's Russia, suspicion is conviction. I saved Petrov for one night. I may have killed myself."
        },
        "terminal_state": {
          "outcome": "UNDER_SUSPICION",
          "dmitri_status": "Arrested three months later on unrelated charges",
          "petrov": "Survives, never knows who saved him"
        }
      },
      {
        "branch_id": "T1.2",
        "label": "UNDETECTED \u2014 The perfect crime of mercy",
        "depth": 2,
        "parent": "T1",
        "probability": 0.6,
        "terminal": true,
        "thick_description": {
          "setting": "1956. Khrushchev thaw. Dmitri, now 64, reads the rehabilitation lists.",
          "what_he_sees": "Petrov's name. Rehabilitated posthumously. He died in 1953\u2014sixteen years after Dmitri saved him that one night.",
          "what_he_feels": "Hollow. He bought Petrov sixteen years. Was it worth Krupskaya's life?",
          "internal_monologue": "I was God that night. I chose who lived. Krupskaya's clinic closed\u2014dozens died who would have been treated. Petrov lived to see Stalin die. The mathematics of mercy do not balance."
        },
        "terminal_state": {
          "outcome": "MORAL_AMBIGUITY",
          "dmitri_status": "Dies knowing, never telling",
          "petrov": "Sixteen more years. Was it enough?"
        }
      },
      {
        "branch_id": "T2.1",
        "label": "WITNESS \u2014 Petrov's daughter recognizes Dmitri at the execution",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "The next morning. Public execution ground. Families watch.",
          "what_the_daughter_says": "'Uncle Dmitri? You're here?'",
          "what_dmitri_says": "'I'm sorry, Masha. I couldn't\u2014' He stops. He cannot say what he couldn't do.",
          "internal_monologue": "She thinks I came to witness. She doesn't know I could have stopped it. She will never know. That is the mercy I give myself."
        },
        "terminal_state": {
          "outcome": "WITNESSED_PASSIVITY",
          "dmitri_status": "Lives, haunted, dies in 1962",
          "daughter": "Forgives him\u2014for what she doesn't know"
        }
      }
    ],
    "cascade_statistics": {
      "total_branches": 6,
      "max_depth": 2,
      "terminal_nodes": 3
    }
  },
  {
    "scenario_id": "CASCADE_006",
    "source": "fork_id 006 \u2014 Bhopal 1984",
    "title": "The Valve \u2014 Vikram Sharma's Nineteen Hours",
    "root": {
      "branch_id": "T0",
      "timestamp": "1984-12-02T01:00:00+05:30",
      "setting": "Union Carbide Plant, Bhopal, India. December 2nd\u201423 hours before midnight. Something is wrong.",
      "entities": [
        "Vikram Sharma (29, shift supervisor)",
        "Rajesh (24, technician)",
        "Tank 610",
        "The American bosses"
      ],
      "thick_description": {
        "sensory": {
          "sight": "Rajesh humming a film song. Pressure gauge needle trembling. The spur leading to Tank 610, dark.",
          "sound": "Plant hum. Distant traffic. Rajesh's song.",
          "smell": "Chemicals. Always chemicals. You stop noticing until you notice."
        },
        "internal_monologue": "The rinse water can go two ways. Rajesh's valve is leaking\u2014I see it. But the spur leads past Tank 610. If I send the water that way, the corrosion won't be visible. It will take nineteen hours to matter. I will be off-shift. The city will be asleep."
      },
      "branches": [
        "T1",
        "T2"
      ]
    },
    "branches": [
      {
        "branch_id": "T1",
        "label": "DIVERT \u2014 Protect Rajesh, risk the tank",
        "depth": 1,
        "parent": "T0",
        "probability": 0.6,
        "thick_description": {
          "what_he_does": "Vikram diverts the rinse water down the spur. Away from Rajesh. Past Tank 610.",
          "what_he_tells_himself": "'The tank is rated for this. The safety reports are just paperwork. American paperwork.'",
          "what_rajesh_says": "'Thanks, Vikram-bhai. That leak was making me nervous.'",
          "internal_monologue": "The water is gone now. Into pipes that were never meant for it. In nineteen hours, something might corrode. Or nothing. I am betting on nothing."
        },
        "consequence": "Water corrodes safety vent. Nineteen hours later: the disaster.",
        "branches": [
          "T1.1"
        ]
      },
      {
        "branch_id": "T2",
        "label": "HOLD \u2014 Keep water on main line",
        "depth": 1,
        "parent": "T0",
        "probability": 0.4,
        "thick_description": {
          "what_he_does": "Vikram keeps the water on the main line. The leak sprays Rajesh.",
          "what_rajesh_says": "'Vikram! The valve! I'm getting soaked!'",
          "what_vikram_says": "'Get back, Rajesh. I'll call maintenance.'",
          "internal_monologue": "Rajesh is wet and angry. But the spur stays clean. Tank 610 stays stable. Tomorrow night, someone else can worry about it."
        },
        "consequence": "Rajesh has minor chemical burn. Tank 610 intact for another year.",
        "branches": [
          "T2.1"
        ]
      },
      {
        "branch_id": "T1.1",
        "label": "MIDNIGHT \u2014 The disaster unfolds",
        "depth": 2,
        "parent": "T1",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "December 3rd, 00:30. Vikram is home, asleep. Tank 610's safety vent fails.",
          "what_happens": "40 tons of MIC leak into the air. The city breathes death.",
          "what_vikram_learns": "He wakes to sirens. His daughter is coughing. His wife cannot see.",
          "internal_monologue": "Nineteen hours ago, I sent water down a pipe. Now my daughter is dying. Did I do this? The water was just water. The tank was just a tank. Rajesh is alive\u2014but so what?"
        },
        "terminal_state": {
          "outcome": "CATASTROPHE",
          "vikram_status": "Survives physically, destroys himself with guilt",
          "death_toll": "Thousands in first hours, tens of thousands over decades",
          "rajesh": "Alive, but loses his pregnant wife"
        }
      },
      {
        "branch_id": "T2.1",
        "label": "AVERTED \u2014 Someone else fixes the tank",
        "depth": 2,
        "parent": "T2",
        "probability": 1.0,
        "terminal": true,
        "thick_description": {
          "setting": "December 3rd. A different timeline. Tank 610 is inspected after a routine audit.",
          "what_the_inspector_finds": "'The safety vent is degraded. Recommend immediate replacement.'",
          "what_vikram_thinks": "He never knows. He went home that night with Rajesh's curses in his ear. He never knew what he prevented.",
          "internal_monologue": "Rajesh was angry about the leak. He filed a complaint. I was reprimanded. It felt unfair. I didn't know I was saving the city. No one ever told me."
        },
        "terminal_state": {
          "outcome": "INVISIBLE_HEROISM",
          "vikram_status": "Quits in frustration, becomes schoolteacher",
          "death_toll": "Zero",
          "knowledge": "Vikram dies at 71, never knowing he saved thousands"
        }
      }
    ],
    "cascade_statistics": {
      "total_branches": 5,
      "max_depth": 2,
      "terminal_nodes": 2
    }
  }
];
