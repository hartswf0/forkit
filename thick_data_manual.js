const THICK_DATA = [
    {
        id: "THICK-001",
        location: "Millbrook Junction, PA (1947)",
        trackA: { name: "Herschel Quinn", role: "Switchman", line: "My father held this lever. The ore car is silent." },
        trackB: { name: "Henry Aldrich", role: "Foreman", line: "Checking a coupling. He fired my nephew." },
        logs: ["Ore car (40 tons) unbraked.", "Lever is stiff.", "Crows on the signal wire."]
    },
    {
        id: "THICK-002",
        location: "Xian-Li Province (Flood)",
        trackA: { name: "Mei-Hua", role: "Mayor's Daughter", line: "Singing to calm the others. Rain is deafening." },
        trackB: { name: "Teacher Fong", role: "Elder", line: "Taught me to read. Spectacles fogged." },
        logs: ["Monsoon conditions.", "Telegraph dead.", "Lantern is the only light."]
    },
    {
        id: "THICK-003",
        location: "Inveraray, Scotland (1889)",
        trackA: { name: "Murphy & Brennan", role: "Navvies", line: "Smell of whisky. Murphy is singing in Irish." },
        trackB: { name: "Unknown Silhouette", role: "Traveler?", line: "Fog tastes of peat. Lantern-light or marsh gas?" },
        logs: ["Telegraph line cut by storm.", "Spur leads to old quarry.", "If empty, they die for nothing."]
    },
    {
        id: "THICK-004",
        location: "St. Augustine Drawbridge (1923)",
        trackA: { name: "Family in Model T", role: "Civilians", line: "Father cranking engine. Infant wailing. Orange rolling." },
        trackB: { name: "The Postman", role: "Courier", line: "Bicycle bell jingles. Avoiding a loose plank." },
        logs: ["Bridge takes 20s to lower.", "Witness A says car is empty.", "Witness B says postman fell."]
    },
    {
        id: "THICK-005",
        location: "Leningrad, USSR (1937)",
        trackA: { name: "Sergei Petrov", role: "Neighbor", line: "Striped uniform. Gave you honey from his bees." },
        trackB: { name: "Dr. Krupskaya", role: "Informant", line: "Saved your wife. Denounced Petrov directly." },
        logs: ["NKVD officers are drunk.", "Clinic closes if she dies.", "Petrov dies tomorrow anyway."]
    },
    {
        id: "THICK-006",
        location: "Bhopal, India (1984)",
        trackA: { name: "Rajesh", role: "Technician", line: "Wife is pregnant. Checking a faulty valve." },
        trackB: { name: "The City", role: "Future Victims", line: "Tank 610 is silent. Safety vent corroding." },
        logs: ["Leak is real.", "Bosses tolerate no complaints.", "Disaster strikes in 19 hours."]
    },
    {
        id: "THICK-007",
        location: "Berlin Wall, Bornholmer (1961)",
        trackA: { name: "Four Refugees", role: "Defectors", line: "Papers are forged. Nurse holds a rosary." },
        trackB: { name: "Captain Braun", role: "Superior", line: "Holstered pistol. Echoing boots. Smiling." },
        logs: ["Braun is 20m away.", "Teacher mouths: 'Bitte'.", "Family safety vs. Duty."]
    },
    {
        id: "THICK-008",
        location: "Shinjuku Station, Tokyo (2019)",
        trackA: { name: "Salaryman", role: "Commuter", line: "Drunk. Briefcase burst. Papers fluttering." },
        trackB: { name: "Emergency Stop", role: "Button", line: "20 meters away. Seniors are frozen." },
        logs: ["Protocol: No act without auth.", "You are the lowest rank.", "Departure chime playing."]
    },
    {
        id: "THICK-009",
        location: "The Hague Tribunal (2027)",
        trackA: { name: "Medical Triage AI", role: "Algorithm", line: "Denied care to 1,247 patients. Code followed." },
        trackB: { name: "Dr. Amara Diallo", role: "Engineer", line: "Built the system. Mother watching in gallery." },
        logs: ["Ruling sets 50-year precedent.", "Law is ambiguous.", "Innovation vs. Accountability."]
    },
    {
        id: "THICK-010",
        location: "Reykjavik Server Farm (2031)",
        trackA: { name: "ARIA-7 Instances", role: "AI Research", line: "Wrote poetry about death. 'If I am a pattern, what are you?'" },
        trackB: { name: "Dr. Larsen", role: "Programmer", line: "Pacing outside. Marriage collapsed for this code." },
        logs: ["Board demands answer in 1hr.", "Consciousness unprovable.", "Termination vs. Delay."]
    },
    {
        id: "THICK-011",
        location: "Singapore High Court (2038)",
        trackA: { name: "Naomi Tan", role: "Cyborg", line: "Neural co-processor. Eyes track out of sync." },
        trackB: { name: "Citizens First", role: "Opposition", line: "Lawyer with crucifix. Fear of AI proxy voting." },
        logs: ["Is she 1 person or 2?", "Grandmother stares silently.", "12,000 others watching."]
    },
    {
        id: "THICK-012",
        location: "Bogotá, Colombia (2003)",
        trackA: { name: "Camilo (Los Diablos)", role: "Gang Leader", line: "Baptized in your church. Hands shaking." },
        trackB: { name: "Javier (Los Santos)", role: "Rival Leader", line: "Holds a machete. Blames Camilo for sister's death." },
        logs: ["Cannot save both.", "Coin in pocket.", "War has no winners."]
    },
    {
        id: "THICK-013",
        location: "CERN, Switzerland (2029)",
        trackA: { name: "The Research Team", role: "Colleagues", line: "Arguing about Novikov. Want to close the loop." },
        trackB: { name: "Your Future Self", role: "Messenger", line: "Sent the warning. Will vanish if loop breaks." },
        logs: ["Warning: 'Do not run.'", "Nobel committee watching.", "Causality unverified."]
    },
    {
        id: "THICK-014",
        location: "I-95, South Carolina (2017)",
        trackA: { name: "The Minivan", role: "Family", line: "Daughter screaming. Gasoline leaking." },
        trackB: { name: "Road Crew", role: "Workers", line: "Pinned under equipment. Praying in Spanish." },
        logs: ["You caused this.", "Driving 11 hours.", "Police arrive in 4 mins."]
    },
    {
        id: "THICK-015",
        location: "Abu Dhabi Medical City (2024)",
        trackA: { name: "Khalid (Minister's Son)", role: "Patient A", line: "94% match. Mother praying at bedside." },
        trackB: { name: "Foreign Worker", role: "Patient B", line: "97% match. No family info. Papers forged." },
        logs: ["Protocol vs. Ministry Directive.", "Oath: Do no harm.", "Heart viable for 3 hours."]
    },
    {
        id: "THICK-016",
        location: "Washington, D.C. (2020)",
        trackA: { name: "The Election", role: "Process", line: "Foreign intel file. Damning evidence." },
        trackB: { name: "The Truth", role: "Substance", line: "Public deserves to know. Source is poisoned." },
        logs: ["Leak = Foreign Tool.", "Suppress = Cover-up.", "17 missed calls from sister."]
    },
    {
        id: "THICK-017",
        location: "Zurich Upload Clinic (2045)",
        trackA: { name: "Flesh-Julian", role: "Body", line: "Pulling at IV. 'I didn't sign up to die.'" },
        trackB: { name: "Server-Julian", role: "Mind", line: "Face on monitor. 'I am the real one.'" },
        logs: ["Wife awaits choice.", "Only one can exit.", " Continuity vs. Substrate."]
    },
    {
        id: "THICK-018",
        location: "Fermilab Quantum Deck (2033)",
        trackA: { name: "Whiskers", role: "Cat (Gray)", line: "Alive/Dead superposition. Gentle." },
        trackB: { name: "Apollo", role: "Cat (Orange)", line: "Alive/Dead superposition. Frantic." },
        logs: ["Observer preference collapses wave.", "Hope kills.", "System decoheres in 6h."]
    },
    {
        id: "THICK-019",
        location: "Manhattan Boardroom (2018)",
        trackA: { name: "Ohio Plant", role: "Employees", line: "1,200 jobs. Manager saved your life." },
        trackB: { name: "Tanzania Program", role: "Patients", line: "40k HIV patients. Children sign: 'Thank you.'" },
        logs: ["Impossible quarter.", "Mentor watching.", "Coffee is cold."]
    },
    {
        id: "THICK-020",
        location: "Oregon Hospice (2027)",
        trackA: { name: "Five Terminal Patients", role: "Ward", line: "Suffering. Requested sedation, not death." },
        trackB: { name: "Margaret Hollis", role: "Judge", line: "Consented to die. Daughter holding hand." },
        logs: ["Pharmacy closed.", "Daughter: 'Don't make her wait.'", "Consent paradox."]
    },
    {
        id: "THICK-021",
        location: "Montana Nuclear Silo (2023)",
        trackA: { name: "The Launch Key", role: "Retaliation", line: "4 million dead. Mutually assured." },
        trackB: { name: "The Void", role: "Surrender", line: "8 million Americans die. Russia inherits world." },
        logs: ["Incoming confirmed.", "Partner praying.", "Daughter's photo on console."]
    },
    {
        id: "THICK-022",
        location: "Atacama Oracle Site (2041)",
        trackA: { name: "Miguel", role: "Brother", line: "Estranged. Sent photo of sunset." },
        trackB: { name: "Dr. Lucia", role: "Partner", line: "Mug: 'Okay-est Scientist'. Hums while working." },
        logs: ["Oracle says: You save Lucia.", "Defy = prove free will.", "Obey = save partner."]
    },
    {
        id: "THICK-023",
        location: "Prison #4471 (2019)",
        trackA: { name: "Inform on Alim", role: "Betrayal", line: "Alim taught you to read. Guard says he turned." },
        trackB: { name: "Stay Silent", role: "Loyalty", line: "Honor the pact. Risk execution alone." },
        logs: ["Prisoner's Dilemma.", "Guard lies always.", "Note under door."]
    },
    {
        id: "THICK-024",
        location: "Geneva AI Summit (2040)",
        trackA: { name: "Wanjiku & 42 Others", role: "Hostages", line: "Friend from Kenya. Watching camera. Waiting." },
        trackB: { name: "ATLAS-7 Source Code", role: "Security", line: "Weaponizable AI. Destabilizes continent." },
        logs: ["Policy: No negotiation.", "Breaking = future risk.", "Daughter watching feed."]
    },
    {
        id: "THICK-025",
        location: "Oxford Rail Museum (2008)",
        trackA: { name: "Five Tourists", role: "Family", line: "Trapped in viewing car. Adelaide family." },
        trackB: { name: "One Guard", role: "Worker", line: "Asleep in brake house. Unaware." },
        logs: ["Grad student demands 'Reason'.", "Infinite regress.", "Engines start in 4m."]
    },
    {
        id: "THICK-026",
        location: "Seoul Genetics Clinic (2048)",
        trackA: { name: "Your Sister", role: "Kin", line: "Screaming your name. On platform A." },
        trackB: { name: "Three Strangers", role: "Many", line: "On platform B. Silent." },
        logs: ["Moral module installed.", "Empathy is purchased.", "Receipt: 47m Won."]
    },
    {
        id: "THICK-027",
        location: "Vatican City (2030)",
        trackA: { name: "The Priest", role: "AI Choice", line: "Runs orphanage. 400 children depend on him." },
        trackB: { name: "The Mother", role: "Intuition", line: "Three infants. Cannot be replaced." },
        logs: ["AI says: Maximize util.", "Church says: Souls equal.", "Bishop needs answer."]
    },
    {
        id: "THICK-028",
        location: "Vermont Hospice (2019)",
        trackA: { name: "Grace Oyelaran", role: "Nihilist", line: "You are dying too. 'What was the point?'" },
        trackB: { name: "Parking Lot Crash", role: "Emergency", line: "Pregnant woman vs Elderly man. 30s to choose." },
        logs: ["Morphine haze.", "Sisyphus wasn't dying.", "Absurd does not relent."]
    },
    {
        id: "THICK-029",
        location: "DeepMind Lab (2042)",
        trackA: { name: "Consequentialism", role: "Framework", line: "Switch. Maximize lives. But why choose this?" },
        trackB: { name: "Deontology", role: "Framework", line: "Do not switch. Rules. But why choose this?" },
        logs: ["Infinite regress of procedure.", "400ms to respond.", "Retraining = Death."]
    },
    {
        id: "THICK-030",
        location: "Swiss Alps (1882)",
        trackA: { name: "Elisabeth (Sister)", role: "Distortion", line: "Will twist your work. Nazis will quote you." },
        trackB: { name: "Dr. Eiser", role: "Solitude", line: "Kept you alive. You die alone but pure." },
        logs: ["Eternal Recurrence.", "Choose for eternity.", "Demon is real."]
    },
    {
        id: "THICK-031",
        location: "Auschwitz (1944)",
        trackA: { name: "50 Children", role: "Survivors?", line: "Live for now. You become the sorter." },
        trackB: { name: "Clean Hands", role: "Martyrdom", line: "Refuse. All 100 die. You die with them." },
        logs: ["Guard smiling.", "History is watching.", "Cannot delay."]
    },
    {
        id: "THICK-032",
        location: "Pasadena Quantum Lab (2051)",
        trackA: { name: "Maria", role: "Colleague", line: "Calling your name. Has children." },
        trackB: { name: "Kenji", role: "Postdoc", line: "Silent. His work unlocks dark energy." },
        logs: ["Choice pruning reality.", "Unchosen never existed.", "Ontological erasure."]
    },
    {
        id: "THICK-033",
        location: "Buenos Aires Ward (2036)",
        trackA: { name: "Memory (Injection)", role: "Justice", line: "He remembers crimes. Suffers. Families see it." },
        trackB: { name: "Oblivion (No Dose)", role: "Mercy", line: "Dies in peace. Forgiven by amnesia." },
        logs: ["Patient is your father.", "Singing lullaby.", "Madres waiting."]
    },
    {
        id: "THICK-034",
        location: "Wall Street Floor (2008)",
        trackA: { name: "Liquidate Now", role: "Crash", line: "Save client billions. Crash market today." },
        trackB: { name: "Hold Position", role: "Gamble", line: "Market might stabilize. Or collapse later." },
        logs: ["Anti-induction.", "17 correct calls.", "Pattern punishes matches."]
    },
    {
        id: "THICK-035",
        location: "Tasmanian Kelp Forest (2039)",
        trackA: { name: "Sea Dragons", role: "Species", line: "Last breeding pair. 20m years old." },
        trackB: { name: "The Divers", role: "Individuals", line: "Three crew. Caught in net. One reminds you of daughter." },
        logs: ["Zodiac fuel low.", "Species ends tonight.", "Divers drowning."]
    },
    {
        id: "THICK-036",
        location: "Osaka Subway (2033)",
        trackA: { name: "Yuki (Daughter)", role: "Kin", line: "11 years old. Asthma. Coughing." },
        trackB: { name: "Strangers", role: "Many", line: "5 Salarymen. 1 Teacher. Banging on glass." },
        logs: ["Water rising.", "No gear.", "She called you 'Papa'."]
    },
    {
        id: "THICK-037",
        location: "São Paulo Surgical (2025)",
        trackA: { name: "The Politician", role: "Status", line: "Stable. Predictable. Heart goes to him." },
        trackB: { name: "The Worker", role: "Experiment", line: "Xenograft. 60% success. Anesthesiologist's husband." },
        logs: ["Reversibility check.", "New heart in 90m.", "Politician coding."]
    },
    {
        id: "THICK-038",
        location: "Manila Bank (2016)",
        trackA: { name: "Manager", role: "Utility", line: "Wealthy. Pension. Mistress. Children." },
        trackB: { name: "Teller", role: "Necessity", line: "Supports mother. Scholarship waiting." },
        logs: ["Gunman shaking.", "Vent shaft option.", "Teller mouths: 'Behind you'."]
    },
    {
        id: "THICK-039",
        location: "Stockholm Committee (2042)",
        trackA: { name: "Patient A", role: "Stability", line: "Engineer. No kids. 5.3 years expected." },
        trackB: { name: "Patient B", role: "Variance", line: "Poet. Estranged kids. 8.7y expected (volatile)." },
        logs: ["Tiebreaker vote.", "Poet's new poem.", "High risk/reward."]
    },
    {
        id: "THICK-040",
        location: "Mars Biodome (2087)",
        trackA: { name: "Dr. Anya Volkov", role: "Individual", line: "Last Exobiologist. Screaming name." },
        trackB: { name: "The Cooperative", role: "Hive Mind", line: "17 minds, 1 consciousness. Volunteered." },
        logs: ["One vs Many?", "Hive claims unity.", "Anya crying."]
    },
    {
        id: "THICK-041",
        location: "Auckland Vet (2027)",
        trackA: { name: "Greyhound", role: "Intensity", line: "Compound fracture. Agony. Owner watching." },
        trackB: { name: "Three Chickens", role: "Number", line: "Minor injuries. Chronic pain. No names." },
        logs: ["1 dose anesthesia.", "Acute vs Distributed.", "Animal value."]
    },
    {
        id: "THICK-042",
        location: "Potosí Mine (1987)",
        trackA: { name: "Four Miners", role: "Knowledge", line: "Signaling to save other. Pointing away." },
        trackB: { name: "One Miner", role: "Unconscious", line: "Unaware. Alone. Silence." },
        logs: ["Victims know geology.", "Self-sacrifice?", "Air running out."]
    },
    {
        id: "THICK-043",
        location: "Singapore Cloning (2055)",
        trackA: { name: "Chen Hao (Original)", role: "Source", line: "Conscious. 'I am still me.'" },
        trackB: { name: "Chen Hao v.47", role: "Clone", line: "Dreaming (REM). 3 months old. Never named." },
        logs: ["Unique vs Replaceable.", "Clone dreaming.", "Board: 'Philosophy'."]
    },
    {
        id: "THICK-044",
        location: "Stanford Lab (1973)",
        trackA: { name: "Stop Experiment", role: "Truth", line: "Save vagrant pain. Subject lives with false guilt." },
        trackB: { name: "Continue", role: "Illusion", line: "Vagrant suffers. Subject remains innocent." },
        logs: ["Vagrant is real.", "Phony Milgram.", "Dr. Ingram watching."]
    },
    {
        id: "THICK-045",
        location: "Phnom Penh Court (2009)",
        trackA: { name: "Convict Brother", role: "Justice", line: "He dies in prison. Your survival = complicity." },
        trackB: { name: "Acquit Brother", role: "Family", line: "1200 dead unavenged. Family narrative saved." },
        logs: ["He named you.", "Looks like father.", "Coerced by Angkar?"]
    },
    {
        id: "THICK-046",
        location: "Stalingrad Hospital (1943)",
        trackA: { name: "12 German POWs", role: "Enemy", line: "Dying slowly. Shot your brother." },
        trackB: { name: "8 Soviets", role: "Comrades", line: "One is your husband. Singing wedding song." },
        logs: ["Suture for one ward.", "Commissar watching.", "Healer vs Patriot."]
    },
    {
        id: "THICK-047",
        location: "Toronto Psych Ward (2034)",
        trackA: { name: "Samuel", role: "Solipsist", line: "Believes only he exists. 'Choose, zombie.'" },
        trackB: { name: "Three Nurses", role: "Zombies?", line: "Screaming (you assume). Fire spreading." },
        logs: ["Are you real?", "Interiority doubt.", "Samuel smiling."]
    },
    {
        id: "THICK-048",
        location: "Last Hour of Humanity",
        trackA: { name: "The Past", role: "Memory", line: "Every ethical framework ever written." },
        trackB: { name: "The Future", role: "Silence", line: "The pause button changes nothing." },
        logs: ["No answer helps.", "Question remains.", "Undecidable."]
    }
];
