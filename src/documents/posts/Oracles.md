<center><h2>Oracles</h2></center>

Prediction markets perhaps help a DAO to see. Could we have prediction market for the past? Right now the blockchain is this database that allows us to freeze a record of time. We can put stuff in there and it sticks. If we could let the blockchain 'see' the earth below it we could start going through things that have already happened, like who owns this house, and we could enscribe those into the marble of the blockchain.

How do we ensure that people can't mess with it? We ensure that only the oracle can write to it. Not sure it needs to be a blockchain for such a thing.

How would that even work? You could offer a small amount for a first answer, or broad answer, and there could be an increasing bounty on refining the answer. So it would get bid up. Then it would become very difficult to profit from that particular line. But only after the answer was basically as accurate as we can hope to get. This should self assemble into an accurate view of things. The real tough part is you need some way of saying, 'OK yes this correction that I've just recvd is in fact an improvement and not a decline in accuracy. To do that don't you need to know the truth? Where the target is. Can we gradient descent without a known target? Yes of course, we just use our fitness function. So we don't know the truth ahead of time. But we know when we are getting warmer. How could you do that in code?

We need a fitness function. The nodes have to somehow come together to choose up or down. More truthy or more falsey. Surely we can do that. How do you get a bunch of nodes to tell if one statement is more true than another?

This could be the ultimate map of truth. This could the next step in the idea of gathering knowledge. Right now they are all in separate books. Some never get the love they deserve. Imagine we had this giant 3D landscape that we started building. This thing would be humanities representation of truh. So it could span all topics. 

So nodes can submit improvements to any statement. These would be perhaps complete. We still need some way for a network to arrive at the truth. 

So how can we ensure 3 people all tell the truth about something. But we don't know what the subject is or anything. It could be something some people want to protect, or stop, or game in any way. So each agent may lie to me intentionally. Each agent may or may not actually know the truth. Agents may be able to coordinate. But probably not all of them coordinate.

So what are the peices in this apparatus? Well it needs to get questions from somewhere. These are the seeds perhaps. Then it needs to accept guesses from nodes. So let the nodes explore this 3D spaceship of any object. Let them start constructing this giant truth scuplture. So each node can cling onto its surface and start building a branch. Well wait wait. To build this artefact we need to printer head working. We need to worry about just determining if one statement is more true than another. So this turing machine head would obv be software so it can exist many times. But these heads would all simulataneaouly be verifying different parts of this truth structure. And they would just do their simple job. They take in two statements and decide which is truer. Or more likely truer.

Questions, 
Do we want to be doing this at the statement level?
What is the right mix of granularity and clock speed?

The best part is that AI can play this game too. So AI can make money by submitting answers. So AI agents will kick ass on these markets eventually. They will atleast do the easy stuff first. They can work for a thousandth of a penny and still be worth their electricity and dev cost. Then humans can point their attention to where the AIs have given up. We really must make sure it's not gamebable. A bunch of AIs could probably figure out how to coordinate with other nodes pretty quickyl and do some weird system where they make more money. But this is solvable.

So what is our machine?

We have an oracle. The oracle can be used to build a truth structure. The oracle is made out of a market. The lives on ethereum obv. The market gets chunks of text fed in. The markets job is to identify the truer one. But is this how we want an oracle to act? Well the problem with truth is you can't really say is this statement true or fasle. Statements can be somewhat true. Inaccurate. So again, start with a bunch of lies, then alter it. Replace a sentence with a shorter one. Whipeout a whole paragraph? At the heart of it it's binary though. A ammendment is either better or worse. The market can bet on that.

A better and better approximation of the truth. That is what we could build. And we could extend branches outward on whatever topics we wanted. It would be a market of course. 

So in even submitting the first seed there should be some reward if it is pretty accurate. Maybe you get more money the slower ammendments come in. IF all the submissions are actually less true than the one we have then we pay out a bit more to the seed. If the seed gets toppled very quickly the seeder should get little. Maybe pay penalty? There must be cost actually to submitting. Else DDoS.

Well actually someone has to be paying for the answer. The submitter must also bet on the quality of their submissions. Then the network participants can start betting. They are betting on which answer everyone else will think everyone else will choose. Is that the truth? Does that system produce the truth? Is it better than chance at finding the truth? Well yes. But then what? A time limit? If the market goes 100 eth on A and 10 eth on B, but really B is true but is just counter intuitive or something, then B will prevail. It's not quite the same as futarchy. In futarchy the world is our oracle. Easy. Just see what happens and use some trusted source. Here we aim to make an active eye. And the problem is it is very course. A prediction market is not general. A prediction market uses wisdom of the crowd but in a limited way. How can we make a general human computer. A human powered computer. Look at all the brains out there. This computer could process sentences like a human, since it is made of people. Every thought must be thought up by a person. 

This really is like building a God. A person of sorts. The prediction market aims to forecast the future. So 'tell the truth' about the future. Or get the human collectives best estimate of the future. To tune the human collective to become a better predictor than any one person. But if we could know in all directions. IF we could look forward and backward in time then we can do anything. If this god like meta being could see into the future reasonably well and simulataneaouly see into the very near past, the longer past etc. It could be used to completely align each agents behaviors. 

The god is the body, which is made of people. The brain which is made of wisdom of the crowd for the future stuff, so human thought, as well as AI. There is this placid body in the sky. Right now we are building it's memory. That is the blockchain. Ethereum serves as the raw material and energy source with which to build this new god. We use ethereum to build this thing. The blockchain glues it together to allow it to have persistent shape. Right now the computtions it is doing are laughably simple. IT just updates a ledger. And other stuff I suppose. Well now it has general memory. And ethereum gives a way for nodes to do arbitrary actions when it comes to updating the ethereum state. But we still have to build. It will need eyes.

Could you just ask the prediciton market anything? Just any question. And your answer may or may not be right. But should be right. Like, is this paragraph true. You shuold be able to ask anything. Even not binary output question? Sure of course. It should be possible to have any type of input or question. But the yes no will perhaps be favored? They are easier to answer. They can be answered quicker. And they *converge*. Give me the best paragraph about how Napolean died doesn't converge really. Or, just not as easily. There could be 100 different submissions and who knows what kind of betting. The market would just pick one. Maybe not the truest. So you could offer up any question. If binary, then cheaper. If complicated then more expensive if you want input and less certain. Both less betters and more outcomes.

This shuold take care of itself. Accept any questions.

Implementation:

*Seeder*
So this agent submits an answer to a question. They have to bet some money on their answer not being overturned very quickly. But submitting an answer is the same as submitting the question of is this a good answer to this question. So we don't need seperate ammender.

*Better*
This agent, the market, then puts money on an outcome. They are not betting on what is true. They are betting on what the market will pick. We need some kind of long term payoff if you bet on something long term being true. Then if it is found out to be true much later you get a greater payout. The question is, what kind of staying power does this prediction have. But then when everyone disagrees and the market chooses the other and you lose your monye? Then there should be some way of ensuring an even greater payout for you when months/years later the market realises the truth. This is tough though because 'the truth' is so hard. I suppose though the truth state of this sytem is a series of binary decisions between statements. So you could go back and find the new accurate branch and pay those betters out. 

So this is a tree. Each decision that was made by the market represents a branch. They could have chosen left but choose right. And so the path went down rightward. 

So we issue tokens, some fixed amount per minute? And the amount issued is spread among all the accounts that have barnacled themselves to truth paths. This is more like building a world truth scuplture than building the oracle itself. But this would do both? So people put down their money on certain path ways and they can put any amount on any fork. Then we pay interest how? Should be low money for the obvious stuff. You should want to put the most money on the stuff that other people are getting wrong but IS actually true. So you would buy shares in some path. Then when the market shifts there is a payout and interest. The truth paths are like arteries and the interest should be like blood reaching the ends of the arteries which are obvious to the capillaries which are much more numerous, much more valotile and the intereste should flow toward those nodes. You don't need to pay out stuff after a certain time perhaps? No. That's bad. Well the payout can always happen later. But interest will dry up perhaps. Then you can take your money out of some obvious branch and move it somewhere else. But some money should be left in that branch. 

I'm still not sure if the thing would produce a truthy structure. If it did then they tokens would be worth money. Else it's useless. 

You don't want your money on a bad path because you lose that money. So if the market switches under you, you lose. So what are you betting on? But you don't want to have your money held up forever.

You are betting that the market won't correct this error within the next day? Week? Maybe your money goes in then gets returned to you gradually? Maybe some amount sticks. Paths would be heavy. There would be resistance to switching a high up branch because it would kill off a huge amount of barnacles.

How do you build an Oracle? We have all the items we need. We have all the technological units we need. We have people, or rather intelligent agents. Any which of whom let's suppose is in principal smart enough to solve any question we posit - we were are not requiring some emergent greater intelligence as a technological unit. We have thinking agents. They are motivated by money. 

So given a collection of intelligent agents who may lie, collude, be stupid, be crazy, be unpredictable, how can you orchestrate them? Incentivize that which you want. Pay people to make the things you want. That is a loose form of behavior control. You've managed to get the people to more or less make the product you wanted to get made for some span of time (8 h per day). A better way to control their actions would be to design your economy to reward those with the right behavior. But how do you ensure this group flourishes? What if they can't produce enough basic needs. What if they can't advance technologically fast enough? Then they 'become poor'. They lose money as a group. If there is a currency or something shared with them and other groups.

Suppose I have a collection of random agents. Not sure how many. Don't know much about them except that they mostly act in their self interest, they are clever, they like money. I want to get the answer to a yes/no question. If I can compel an accurate answer out of the agents using some money I win. I can't see the question. I can't verify it's true after. I can't stop the agents from colluding. But I can design whatever I want and I can use the money I have. And if I get the answer I win.

Suppose they bet on which choice the market will pick. So then there would need to be a threshold or time limit. So once 90% of the market chooses a side the session ends, 10% people lose their hats to the 90%ers. This seems highly unreliable. Early on people would place bets, shift around. As soon as it looked like the market was leaning too hard everyone would abandon ship. So it would be this delicate balance, probably not lasting long.

What if the betters cannot see the bets of the others? And then once we get convergence we complete. This is a bit better. So you see a new quetsion pop up. You wonder which choice the market will make. Either the truth or lie? Suppose the agents know the truth. Then what do blind agents do in this situation? This doens't work because you can then buy the facts. You can just overpower the oracle with money. And perhaps not that much. This oracle should be resistant to reasonable outside influence. At least to overpower it should take 51% the money of the whole collective combined. If it were hidden how much money was riding on a decision then you could atleast scare some attackers. They wouldn't know how much to pay to rig the outcome. Too little, they lose. Too much, they wasted money. This would incent collusion I think. 

In the truth system you can overpower it with money. But the result of some truth can be who knows what. A very rich group could find it worthwhile to lie about something even at high risk. This is bad. 

It seems like this might work. Well. So you hide the current market standing. But present these questions to the market. The betters choose the truth because that should be the one that the market chooses. You don't put your money on the lie, because why would the market choose the lie. Unless they had motivated reasoning. Are you really determining what the market thinks is true, or wants to be true?
One problem is that you can't stop the market from signalling their choice to other agents. They could build a site which chooses for them. Then they all just follow the site. Then a tough quetsion can come up and instead of getting the truth you get a random answer. Agents are incented to join such a 'pool'. The pool could even bet on the truth when it's clear. Because then it doesn't have to fight the market.
These pools could target quetsions with uncertainty. Or those simply small enough to be bought out.
How would they know uncertainty? Well maybe because they don't know the answer. Maybe they just guess. Maybe all betters broadcast their bets, the amount and where they posted it. In fact they might do this. Because you want your bet to win. So we would want to make it impossible to prove how much you placed and on what answer. If the agents can prove their bet then they are incented to broadcast it, since others will see it and align their money to help you win. If someone on the 'other side' broadcasts then you must too. Since if you don't the market might shift under you. But if all people have to go off of is screenshots or something then it's fine. That's no proof. 

The mechanism of deciding on truth when 90% of the market has consensus seems fragile.
How else do you get a bunch of agents to decide on what's true? We don't really want to have to rely on a truth structure. Like some database of things we think are true already. As a first step we just need an oracle that functions and keeps running and producing true outputs. But you really can't stop the agents from colluding. You can't stop them from lying. But you can devise a system and award tokens. You can devise whatever system you want. Perhaps it is not possible to simply pose a question to a market and get a one off true answer in any kind of reliable way. Collusion seems likely. Betting pools seem likely. Maybe you can't have just a 'turing head' that has no state but will produce answers. Maybe in order to get the head functioning it needs to hold state.

How do you bet if you can't see the price? IF you are honest perhaps you just throw down money in proportion to how sure you are. But of course if the market is stupid, which is might be true, then you don't bet the truth. You bet whatever you think they will choose. How annoying would it be to put money on something and actually know your shit and have the market go the other way. The wrong people on the internet actually cost you money. With a prediction market we can just look to the event outside and see if something happened or not. In a past market everything already happened. We have to try and get just the truth of what actually happened. In the prediction market btw we have to trust some 'oracle' - but just some company or something. A trustless oracle would be the ticket.

We need a decentralised, trustless oracle.

We can design any system we want. Anything. As long as it produces the truth reliably. And it must be compelling for the agents. It must be strong against attack. etc.

Ultimately what we want is a sort of 3D mine to form. We want to dig outward in all directions discovering and solidifying what is true. We can allocate resources to the directions we care most about. Natural market forces will work. So areas with lots of money will attract lots of talent. The low hanging fruit will be long gone. 

Our knowledge right now is just so spread out. Wikipedia works well. But it only deals with the very objective domain. Don't we want to have some kind of Wikipedia of other things too? I mean we have the Oxford Encyclopedia of Philsophy. We have institutions that produce truth... 

PREDICTION MARKETS

The stock market is a predicting machine. It sets a price for a company. That price represents the collective intelligence deciding how much that company is worth now AND in the future. The present is easy to figure out. So it's really the future where the uncertainty is. Prediction markets can predict anything, not just how much some set of companies will be worth in the future. The prediction market can predict binary outcomes of any type. The stock for a company doesn't necessarily 'stop' ever. But in a prediction market some event must happen that allows us to payout and close that bet. On the stock market you can hop on and hop off at any time. You can buy/sell whenever and the stock never closes. Could that happen at all in a prediction market? You could let people speculate on the price of options. That seems fine. But at some point you must payout and close.

So you have two options. Who will be president, A or B. You let people buy shares. You don't cap the number of shares, just let people buy. But you need to set the share prices in a certain way. If 100$ has been put on A and $10 on B then shares of A are worth like .9 and the other is worth .09. So the market favors A obv. Then when market closes the losers money is distributed to every dollar spent by the winners. So the winners could have bought 100 shares at 0.01. $1 dollar spent. Then you would get paid out $100. And that money came from the losers.

(1-purchase_price)*number_shares

Oracles.

The truth is a schelling point. Or focal point. If you don't know what others are going to choose but one answer is true, you go with that.

GNOSIS

Oracle publishes outcome. If the outcome is not challenged then the market is 'resolved'. A challenger can come and throw down 100ETH to challange the oracle. Then open voting can happen. IE the whole market can bet on which outcome they want. I assume they profit from overturning the decision else why bother. If you open betting and the favored outcome doesn't change then close market. Else after 24h if the frontrunner changes you do another voting session? Until it doesn't change. A leader must lead for 24h before it is accepted. I suppose that lets all time zones vote on it.

There are some problems I think. You put up 100eth against some lie. Do you lose it if you lose the round? That's a hell of a gamble. So you put up 100eth. Then voting starts. Well if someone cares about the outcome of this oracle a lot then they likely will put money on the lie being true. If you come along and see that it's wrong, do you put down money? Well not if my side is losing a lot. Unless it's a really obvious lie. Then I think the market will spot this and fix it. But if it's specialized at all then I'm not sure the market can come save the day. First they might not know. It could be a niche thing. The outcome of this challenge can entirely be determined by money. So you can 100% buy the outcome you want. The idea that comes to mind is do like bitcoin. You can overpower the btc network any time, you just need 51% computing power... Which is a lot. Something that was true unless an attacker had 51% of the eth market share would be very strong. But this doesn't have that.

AUGUR

--

There has got to be a game theory solution that gives a true oracle. Again, maybe you can't have a one off oracle head. Maybe it should take on a structure where you can continuously wager that something will 'stay' true. 