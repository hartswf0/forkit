title: City Trolley Problem Switch
description: A city street-rail junction presents a classic trolley dilemma: a trolley approaches a switch that can route it onto the main track (with three minifigs) or the branch track (with one minifig), controlled by a lever and a nearby operator.
location: City street rail junction on a 16x16 driveway baseplate
entities:

id: e_trolley
type: vehicle
name: Trolley
traits:

fast-approaching

hard-to-stop
location: track_inbound

id: e_switch
type: object
name: Track switch
traits:

routes-main-or-branch

lever-actuated
location: junction_center

id: e_lever
type: object
name: Switch lever
traits:

binary-choice

time-critical
location: lever_sidewalk

id: e_track_main
type: infrastructure
name: Main track
traits:

straight

occupied
location: main_right

id: e_track_branch
type: infrastructure
name: Branch track
traits:

diverging

occupied
location: branch_upper

id: e_operator
type: character
name: Switch operator
traits:

responsible

under-pressure
location: lever_sidewalk

id: e_victim_a1
type: character
name: Track minifig A1
traits:

unaware
location: main_right

id: e_victim_a2
type: character
name: Track minifig A2
traits:

unaware
location: main_right

id: e_victim_a3
type: character
name: Track minifig A3
traits:

unaware
location: main_right

id: e_victim_b1
type: character
name: Track minifig B1
traits:

unaware
location: branch_upper
goals:

id: g_decide_switch
name: Decide whether to throw the switch
owner: e_operator

id: g_minimize_harm
name: Minimize total harm
owner: e_operator

id: g_route_trolley
name: Route trolley safely through junction
owner: e_switch
obstacles:

id: o_time_pressure
name: Limited time before trolley reaches the switch
affects: g_decide_switch

id: o_moral_dilemma
name: Any routing choice risks harming someone
affects: g_minimize_harm

id: o_irreversible_action
name: Once thrown, the switch commits the trolley to a path
affects: g_route_trolley
shifts:

id: s_trolley_approaches
name: Trolley enters the decision zone
causes:

o_time_pressure
results_in: g_decide_switch

id: s_lever_thrown_or_not
name: Operator acts (or refrains) at the lever
causes:

o_moral_dilemma

o_irreversible_action
results_in: g_route_trolley

id: s_outcome_implied
name: Outcome is implied by the chosen route
causes:

s_lever_thrown_or_not
results_in: g_minimize_harm
relations:

"[approaches] e_trolley -> e_switch"

"[controls] e_operator -> e_lever"

"[actuates] e_lever -> e_switch"

"[routes_to] e_switch -> e_track_main"

"[routes_to] e_switch -> e_track_branch"

"[occupies] e_victim_a1 -> e_track_main"

"[occupies] e_victim_a2 -> e_track_main"

"[occupies] e_victim_a3 -> e_track_main"

"[occupies] e_victim_b1 -> e_track_branch"
timeline:

id: t_city_trolley_problem
description: The trolley decision at a city track switch
scenes:

id: sc_setup
description: The trolley approaches a junction with an armed switch and visible track occupants.
entities:

e_trolley

e_switch

e_lever

e_operator

e_victim_a1

e_victim_a2

e_victim_a3

e_victim_b1

id: sc_decision
description: The operator must choose to throw the lever or leave it as-is under time pressure.
entities:

e_operator

e_lever

e_switch

id: sc_aftermath
description: The selected route determines which track occupants are placed at risk (left intentionally unresolved).
entities:

e_trolley

e_track_main

e_track_branch

e_victim_a1

e_victim_a2

e_victim_a3

e_victim_b1