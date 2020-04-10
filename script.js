// Roman Chlapak, 101184746 | leonary Cherepaha,
using System;
using System.IO;

namespace Assignment2
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] questions = {
                    "1. How many players per team are on the field at one time for each team (full field)? \n A:11 \n B:9 \n C:13 \n D:10 \n E:12",
                    "2. When was the first soccer league created? \n A:1974 \n B:1888 \n C:1997 \n D:1897 \n E:1898",
                    "3. The FA (Football Association) founded on which year? \n A:1863 \n B:1867 \n C:1860 \n D:1870 \n E:1845",
                    "4. A soccer game is divided into how many equal parts? \n A:3 periods  \n B:2 halves \n C:3 quarters \n D:9 innings \n E:3 rounds",
                    "5. Which country won the highest number of world cups? \n A:Argentina \n B:Brazil  \n C:USA \n D:Germany \n E:spain",
                    "6. How long is an official professionally sanctioned game? \n A:40 minutes \n B:80 minutes \n C:100 minutes \n D:90 minutes \n E:120 minutes",
                    "7. How many times did Italy win the FIFA world cup? \n A:4  \n B:5 \n C:6 \n D:2 \n E:3",
                    "8. In which country was the first FIFA world cup held in? \n A:Uruguay  \n B:Brazil \n C:Spain \n D:Germany \n E:France",
                    "9. Who won the first football world cup? \n A:Germany \n B:USA \n C:Uruguay \n D:Paraguay \n E:Mexico",
                    "10. If the ball rolls out of bounds on the sideline in soccer, what is the result? \n A:goal-kick \n B:throw-in \n C:corner \n D:penalty \n E:free-kick",
                    "11. Which player scored more number of goals in the FIFA world cup? \n A: Cristiano Ronaldo \n B: Andrea Pirlo \n C:Miroslav Klose \n D:Lionel Messi \n E:Gareth Bale",
                    "12. In soccer, who is the only player that is allowed to use their hands in the field of play? \n A:Goalie \n B:Midfielder \n C:Forward \n D:Defender \n E:The Manager",
                    "13. In 2010 world cup who was the captain of Spain? \n A:David Villa \n B:Iker Casillas \n C:Carles Puyol \n D:Sergio Ramos \n E:Andre Iniesta",
                    "14. If an offensive player is fouled in the box, the result is a                kick. \n A:Penalty Kick \n B:Direct \n C:Corner \n D:Free-kick \n E:free-kick",
                    "15. Diego Maradona played how many world cups? \n A:5 \n B:6 \n C:4 \n D:2 \n E:3",
                    "16. Eng is the FIFA code of which country? \n A:England \n B:Germany \n C:Brazil \n D:Netherlands \n E:France",
                    "17. How many teams are in the English Premier League \n A:15 \n B:25 \n C:20  \n D:19 \n E:17",
                    "18. Who won the champions league of 2019? \n A:Real Madrid \n B:Bareclona FC \n C:Juventus \n D:Liverpool FC \n E:Bayern Munich",
                    "19. How long can a goalkeeper hold onto the ball for according to the official FIFA rulebook? \n A:No Limit \n B:10 Seconds \n C:3 Seconds \n D:5 Seconds \n E:15 Seconds",
                    "20. Who is known as the “King of Soccer” \n A:Pele \n B:Cristiano Ronaldo  \n C:Lionel Messi  \n D:Zinedine Zidane \n E:Diego Maradona" };
            string[] answers = { "A", "B", "A", "B", "B", "D", "A", "A", "C", "B", "C", "A", "B", "A", "C", "A", "C", "D", "D", "A" };
            
            int[] numOfCorrectAnswers = new int[20] { 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0};
            int numOfPlayers,highestScore = 0,totalScore = 0,averageScore = 0,lowestScore = 80 ;

            //INPUT
            Console.WriteLine("Welcome to my test!");
            Console.WriteLine("------------------------------------------------------------------------------");
            Console.WriteLine("Here are the RULES!");
            Console.WriteLine("The test has 20 questions and is out of 80");
            Console.WriteLine("Every question correctly answered on the FIRST attempt will receive 4 marks");
            Console.WriteLine("Any incorrect attempt will receive -1 marks.");
            Console.WriteLine("Any Skipped will receive 0 marks");
            Console.WriteLine("Press enter to skip the current question.");
            Console.WriteLine("Answers are case sensitive, please use uppercase letters");
            Console.WriteLine("------------------------------------------------------------------------------");

            Console.Write("How many contestants will be participating in this quiz: ");
            numOfPlayers = Convert.ToInt32(Console.ReadLine());

            string[] players = new string[numOfPlayers];
            int[] playerScore = new int[numOfPlayers];
            string[] userAnswers = new string[answers.Length];
            double mark = 0;

            for (int i = 0; i < numOfPlayers; i++)
            {

                Console.Write("Please enter the players name: ");
                players[i] = Console.ReadLine();

            }
          
            for (int i = 0; i < numOfPlayers; i++)
            {
                Console.WriteLine("-----------------Contestant: {0}-----------------", players[i]);

                for (int z = 0; z < questions.Length; z++)
                {
                    string answer;
                    Console.WriteLine(questions[z]);
                   
                    answer = Console.ReadLine();
                    //correct answer
                    if (answer == answers[z])
                    {
                        Console.WriteLine("Correct");
                        playerScore[i] += 4;
                        numOfCorrectAnswers[i]++;

                    }
                    //skipped
                    else if (answer == "")
                    {
                        playerScore[i] += 0;
                    }
                    //incorrect answer
                    else
                    {
                        Console.WriteLine("Oops, Not correct");
                        playerScore[i] -= 1;
                    };
                    // user skips question
                    for (int k = 0; k < userAnswers.Length; k++)
                    {
                        if (answer == "")
                        {
                            userAnswers[k] += "X";
                        }
                        else
                        {
                            userAnswers[k] += answer;
                        }

                    }
                }
            }

            //highest,lowest,average score
            for (int k = 0; k < playerScore.Length; k++)
            {

                // highest Score
                if (playerScore[k] > highestScore)
                {
                    highestScore = playerScore[k];
                }
                //lowest Score
                if (playerScore[k] < lowestScore)
                {
                    lowestScore = playerScore[k];
                }
                //averageScore;
                totalScore += playerScore[k];
                averageScore = totalScore / numOfPlayers;
            }

            //exam.txt file, ID : mark out of 80
            for (int z = 0; z < playerScore.Length; z++)
            {


                using (StreamWriter sr = File.AppendText("exam.txt"))
                {
                   
                    sr.WriteLine("{0}: {1}/80, {2}", players[z], playerScore[z], userAnswers[z]);
                    sr.Close();

                    Console.WriteLine(File.ReadAllText("exam.txt"));
                }
            }

            //report.txt student report
            using (StreamWriter writer = new StreamWriter("../report.txt"))
            {
                writer.WriteLine("********** MCQ STUDENT EXAM REPORT **********");


                writer.WriteLine("Student Number\tMark");
                for (int i = 0; i < players.Length; i++)
                {
                    mark = (playerScore[i] / 80) * 100;
                    writer.WriteLine("{0}\t\t{1}", players[i], mark);
                }


                writer.WriteLine("Total Number Of Examinations Marked: {0}", players.Length);
                writer.WriteLine("Number of correct respones for each question: ");
                for (int i = 0; i < questions.Length; i++)
                {
                    
                    writer.WriteLine("#Correct: {0} | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 ", numOfCorrectAnswers[i]);
                }
                writer.WriteLine("question: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 ");
                writer.WriteLine("#Correct: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 ");



                writer.WriteLine("The Highest Score was : {0}.\n The lowest Score was : {1}.\n The Average Score was : {2}.", highestScore, lowestScore, averageScore);
                writer.Close();
                Console.WriteLine(File.ReadAllText("report.txt"));
            }
            Console.ReadKey();

        }
    }
}
