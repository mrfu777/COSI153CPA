
export interface Player {
  fullname: string;
  birthday: string;
  introduction: string;
  position: string;
  poster: string;
}

let currentName: string = '';

export const changeCurrentName = (name: string) => {
  currentName = name;
}
export const getCurrentName = () => {
  return currentName;
}

export const players: Player[] = [
  {
    fullname: 'LeBron Raymone James',
    birthday: '1984-12-30',
    introduction: `LeBron Raymone James Sr. (/ləˈbrɒn/; born December 30, 1984) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). Nicknamed "King James", he is widely considered one of the greatest players of all time. James has won four NBA championships, four NBA MVP awards, four NBA Finals MVP awards, three All-Star MVP awards, and two Olympic gold medals. James has scored the most points in the playoffs, the second most career points, and has the seventh most career assists. He has been selected an NBA All-Star 18 times, to the All-NBA Team a record 18 times,[a] and to the NBA All-Defensive First Team five times.[3] He has competed in ten NBA Finals, the third most all time, including eight consecutively between 2011 and 2018.[4] In 2021, James was selected to the NBA 75th Anniversary Team, and in 2022 became the first player in NBA history to accumulate 10,000 or more career points, rebounds, and assists.`,
    position: 'Small forward',
    poster: 'https://p2.itc.cn/images01/20210822/22f0af88ee754f3f96d291083d2cc1e1.jpeg'
  },
  {
    fullname: 'James Edward Harden',
    birthday: '1989-8-26',
    introduction: 'James Edward Harden Jr. (born August 26, 1989) is an American professional basketball player who last played for the Philadelphia 76ers of the National Basketball Association (NBA). He is one of the NBA\'s most prolific scorers and has been called the best shooting guard in the NBA,[1][2] as well as one of the top overall players in the league.[3]',
    position: 'Shooting Guard and Point Guard',
    poster: 'https://sportsmanheight.com/wp-content/uploads/2021/04/harden.jpg'
  }
];

export const getMatchedPlayer = () => {
  const player:Player | undefined = players.find(item => {
    return new RegExp(`${currentName}`, 'i').test(item.fullname)
  });
  return player;
}

export const addPlayer = (
  fullname: string,
  birthday: string,
  introduction: string,
  position: string,
  poster: string
  ) => {
  players.push({
    fullname,
    birthday,
    introduction,
    poster,
    position
  })
}

