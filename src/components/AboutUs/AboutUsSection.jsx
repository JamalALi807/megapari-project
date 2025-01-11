import React from 'react';
import Image from 'next/image';
import HoverSidebar from '../../components/HoverSidebar'

const AboutUsSection = () => {
  return (
    < div className='relative '>
     
    
    <section className="max-w-full w-full mx-auto ">
    {/* <div className='relative '>
            <HoverSidebar/>
        </div> */}
    {/* </div> */}
        
      {/* Hero Image Section */}
      <div className="relative w-full h-[200px]">
        <Image
          src="/about.webp"
          alt="Sports collage showing various athletes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-red-900/30" />
      </div>

      {/* Content Section */}
      <div className="px-4 py-8 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          About us
        </h1>
        
        <h2 className="text-xl text-gray-800 mb-6">
          Megapari Betting Company
        </h2>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          

          <p>
        If you're looking for somewhere that covers all your gaming preferences, such as pre-match and live betting, slots, live casino, Aviator and Crash games, virtual sport, parimutuel betting, lotteries, and much more, then look no further than Megapari. Our multi-million dollar jackpots are waiting for someone to win them every day!
    </p>
    <p>
        Don't worry about trying to work out which methods work for depositing and withdrawing funds. Once you've registered, you'll have access to a myriad of different methods from Visa and Mastercard, to over 20 different cryptocurrencies backed by local methods. Our multilingual support service is ready to help you 24/7 with any problems you may have. Our interface is available in over 60 different languages, so our customers won't have to worry that their preferred language isn't supported.
    </p>
    <p></p>

          <p>
        However, we offer a lot more than just sports betting, slots and a live casino. Even a newcomer won't have any problems placing a bet. Megapari offers the best methods for placing bets (desktop and mobile sites, Android and iOS apps, and even bets via Telegram), reliable statistics, and secure and convenient payment methods. Betting with us is incredibly easy. The registration process is simple, and you can place a bet in just one click.
    </p>
    <p>
        Bet on a wide variety of different sports, such as football, tennis, basketball, hockey, table tennis, golf, baseball, cricket, rugby, badminton, MMA, cycling, horse and dog racing, handball, snooker, boxing, volleyball, chess, formula 1, lacrosse, lottery, kabaddi, water polo, and more. Whether you love huge sporting events or just show up for your favorite local team, Megapari will always have something for everyone. You'll never miss important sporting events like the World Cup, WTA and ATP tournaments, the Super Bowl, the Olympics, the English Premier League, the Baseball World Series, IPL, FA Cup, Wimbledon, NFL, NHL, UEFA Champions’ League, MLB, NCAA, Bundesliga, NBA, the Cricket World Cup, the UEFA Europa League, the Ice Hockey World Championships, the Tour de France, La Liga, Twenty20, or the Euroleague.
    </p>
    <p>
        Choose from more than 500 outcomes on a single event with sky-high odds guaranteed. And with our live streams, available 24/7, you'll never miss another exciting moment.
    </p>
    <p>
        We also offer bets for things other than sport, you can bet on Taskmaster, Big Brother, Love Island, Eurovision, the Emmy Awards, the Oscars, the Golden Globes, the BAFTAs, Survivor, the Nobel Prize, and even political events. We're always in the loop about the latest events and odds, so you'll never miss out on an amazing chance to place a bet on something that interests you!
    </p>
    <p>
        We also offer live betting, which allows you to place wagers while the match is in progress, as well as single and accumulator bets, which combine several bets into one in order to increase your winnings. Our betting options and competitive sportsbook let you place bets on ongoing events up to the last minute of the match.
    </p>
    <p>
        Ever since Megapari was founded, it has always focused a considerable amount of its attention on esports. We're following the constantly developing esports industry and expanding our selection of available games. At the moment we take bets on over 30 games, including CS:GO, DOTA 2, League of Legends, Valorant, StarCraft, Mobile Legends, Rainbow 6, King of Glory, PUBG, Overwatch, and more.
    </p>
    <p>
        If you're a casino lover, then you're definitely in the right place. We've got everything an online casino should have, including all the best slot games, blackjack, Andar Bahar, roulette, bingo, poker, and much more. We've also got a huge choice of games with live dealers!
    </p>
    <p>
        There are over 200 gaming providers offering both casino games with live dealers and popular slots, such as Wilds of Fortune, Blackjack, Sweet Bonanza, Andar Bahar, Gates of Olympus, Lightning Roulette, Dragon Clusterbuster, Starburst, Aviator, Crazy Time, Sugar Rush, Book of Dead, Big Bass Bonanza, Baccarat, and Sic Bo.
    </p>
    <p>
        You can play online casino games on Megapari using your smartphone, tablet, or computer, the choice is yours! No matter where you decide to play, you'll have a wide range of casino games just a few clicks away, ready to help you win both bonuses and real money.
    </p>
    <p>
        We can also proudly say that we have over 20,000 slot games and 1000 games with live dealers in our portfolio, and it's constantly growing. With daily jackpots and big cash prizes, every player can find a game that they love.
    </p>
    <p>
        Megapari is a large online betting and casino platform offering every player in permitted jurisdictions massive chances to win. This means it's an ideal place for sport and gaming lovers. Register today to enjoy the best online gaming platform.
    </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutUsSection;
