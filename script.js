{
                string fname, lname, q1R, q2R, q3R, q4R, q5R;
                int mark = 0;
                double percentage;


                string[] questions = { "How many players per team are on the field at one time for each team (full field)? \n A:11 \n B:9 \n C:13 \n D:10 \n E:9", "When was the first soccer league created? \n A:1974 \n B:1888 \n C:1997 \n D:1897 \n E:1884", "The FA (Football Association) founded on which year? \n A:1863 \n B:1867 \n C:1860 \n D:1870 \n E:1877", "A soccer game is divided into how many equal parts? \n A:3 periods  \n B:2 halves \n C:3 quarters \n D:9 innings \n E:4 periods", "Which country won the highest number of world cups? \n A:Argentina \n B:Netherlands  \n C:USA \n D:Germany \n E:Brazil", "How long is an official professionally sanctioned game? \n A:40 minutes \n B:80 minutes \n C:100 minutes \n D:90 minutes \n E:60 minutes", "How many times did Italy win the FIFA world cup? \n A:4  \n B:5 \n C:6 \n D:2 \n E:3", "In which country was the first FIFA world cup held in? \n A:Italy  \n B:Brazil \n C:Spain \n D:Germany \n E:Uruguay", "Who won the first football world cup? \n A:Germany \n B:USA \n C:Uruguay \n D:Paraguay \n E:Netherlands", "If the ball rolls out of bounds on the sideline in soccer, what is the result? \n A:goal-kick \n B:free-kick \n C:corner \n D:penalty \n E:throw-in", "Which player scored more number of goals in the FIFA world cup? \n A: Cristiano Ronaldo \n B: Andrea Pirlo \n C:Miroslav Klose \n D:Lionel Messi \n E: Arjen Robben", "In soccer, who is the only player that is allowed to use their hands in the field of play? \n A:Goalie \n B:Midfielder \n C:Forward \n D:Defender \n E:Manager", "In 2010 world cup who was the captain of Spain? \n A:David Villa \n B:Iker Casillas \n C:Carles Puyol \n D:Sergio Ramos \n E:Gerard Pique", "If an offensive player is fouled in the box, the result is a                kick. \n A:Penalty Kick \n B:Direct \n C:Corner \n D:Free-kick \n E:Indirect", "Diego Maradona played how many world cups? \n A:5 \n B:6 \n C:4 \n D:2 \n E:3", "Eng is the FIFA code of which country? \n A:England \n B:Germany \n C:Brazil \n D:Netherlands \n E:Equador", "How many teams are in the English Premier League \n A:15 \n B:25 \n C:20  \n D:19 \n E:18", "Who won the champions league of 2019? \n A:Real Madrid \n B:Bareclona FC \n C:Juventus \n D:Liverpool FC \n E:Chelsea", "How long can a goalkeeper hold onto the ball for according to the official FIFA rulebook? \n A:No Limit \n B:10 Seconds \n C:3 Seconds \n D:30 Seconds \n E:5 Seconds", "Who is known as the “King of Soccer” \n A:Pele \n B:Cristiano Ronaldo  \n C:Lionel Messi  \n D:Zinedine Zidane \n E: Arjen Robben" };
                string[] answers = { "A", "B", "A", "B", "E", "D", "A", "E", "C", "E", "C","A","B", "A", "C", "A", "C", "D", "E", "A"};
                int[] attempts = { 0, 0, 0, 0, 0 };

                //INPUT
                Console.WriteLine("Welcome to my test!");
                Console.WriteLine("------------------------------------------------------------------------------");
                Console.WriteLine("Here are the RULES!");
                Console.WriteLine("The test has 5 questions and is out of 100");
                Console.WriteLine("Every question correctly answered on the FIRST attempt will receive 20 marks");
                Console.WriteLine("Every question correctly answered on SECOND attempt will receive 10 marks");
                Console.WriteLine("Any additional attempts will receive 0 marks");
                Console.WriteLine("You need to answer the question correctly to move on to the next question!");
                Console.WriteLine("------------------------------------------------------------------------------");

                Console.Write("Please enter your first name:");
                fname = Console.ReadLine();
                Console.Write("Please enter your last name:");
                lname = Console.ReadLine();


                // Question 1
                Console.WriteLine("--------------QUESTION 1-----------------");
                Console.WriteLine(questions[0]);
                q1R = Console.ReadLine();

                while (q1R != answers[0])
                {
                    Console.WriteLine(questions[0]);
                    q1R = Console.ReadLine();
                    attempts[0] = attempts[0]++;
                }
                do
                {
                    if (q1R == answers[0] && attempts[0] == 0)
                    {
                        attempts[0]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 1/1");
                    }
                    else if (q1R == answers[0] && attempts[0] == 1)
                    {
                        attempts[0]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 1/1");

                    }
                    else if (q1R == answers[0] && attempts[0] > 1)
                    {
                        attempts[0]++;
                        Console.WriteLine("Correct! | 1/1");
                    }
                } while (q1R != answers[0]);

                Console.WriteLine("--------------QUESTION 2-----------------");
                // Question 2
                Console.WriteLine(questions[1]);
                q2R = Console.ReadLine();

                while (q2R != answers[1])
                {
                    Console.WriteLine(questions[1]);
                    q2R = Console.ReadLine();
                    attempts[1]++;
                }
                do
                {
                    if (q2R == answers[1] && attempts[1] == 0)
                    {
                        attempts[1]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 2/2 ");
                    }
                    else if (q2R == answers[1] && attempts[1] == 1)
                    {
                        attempts[1]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 2/2 ");

                    }
                    else if (q2R == answers[1] && attempts[1] > 1)
                    {
                        attempts[1]++;
                        Console.WriteLine("Correct! | 2/2 ");
                    }
                } while (q2R != answers[1]);

                Console.WriteLine("--------------QUESTION 3-----------------");
                // Question 3
                Console.WriteLine(questions[2]);
                q3R = Console.ReadLine();

                while (q3R != answers[2])
                {
                    Console.WriteLine(questions[2]);
                    q3R = Console.ReadLine();
                    attempts[2]++;
                }
                do
                {
                    if (q3R == answers[2] && attempts[2] == 0)
                    {
                        attempts[2]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 3/3 Keep it going!");
                    }
                    else if (q3R == answers[2] && attempts[2] == 1)
                    {
                        attempts[2]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 3/3 Keep it going!");

                    }
                    else if (q3R == answers[2] && attempts[2] > 1)
                    {
                        attempts[2]++;
                        Console.WriteLine("Correct! | 3/3 Keep it going!");
                    }
                } while (q3R != answers[2]);

                // Question 4
                Console.WriteLine("--------------QUESTION 4-----------------");
                Console.WriteLine(questions[3]);
                q4R = Console.ReadLine();

                while (q4R != answers[3])
                {
                    Console.WriteLine(questions[3]);
                    q4R = Console.ReadLine();
                    attempts[3]++;
                }
                do
                {
                    if (q4R == answers[3] && attempts[3] == 0)
                    {
                        attempts[3]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 4/4 your almost done!");
                    }
                    else if (q4R == answers[3] && attempts[3] == 1)
                    {
                        attempts[3]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 4/4 your almost done!");

                    }
                    else if (q4R == answers[3] && attempts[3] > 1)
                    {
                        attempts[3]++;
                        Console.WriteLine("Correct! | 4/4 your almost done!");
                    }
                } while (q4R != answers[3]);


                // Question 5
                Console.WriteLine("--------------QUESTION 5-----------------");
                Console.WriteLine(questions[4]);
                q5R = Console.ReadLine();

                while (q5R != answers[4])
                {
                    Console.WriteLine(questions[4]);
                    q5R = Console.ReadLine();
                    attempts[4]++;
                }
                do
                {
                    if (q5R == answers[4] && attempts[4] == 0)
                    {
                        attempts[4]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q5R == answers[4] && attempts[4] == 1)
                    {
                        attempts[4]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q5R == answers[4] && attempts[4] > 1)
                    {
                        attempts[4]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q5R != answers[4]);


                //PROCESSING
                percentage = (Convert.ToDouble(mark));


                //OUTPUT
                Console.WriteLine("------------------------FINAL-------------------------");
                Console.WriteLine("Test taken on " + DateTime.Now.ToString("dd/MM/yyyy") + " at " + DateTime.Now.ToString("hh:mm tt"));
                Console.WriteLine("firstname: {0} | lastname: {1}", fname, lname);
                Console.WriteLine("You scored {0}/100", mark);
                Console.WriteLine("You got {0}%", percentage);
                Console.WriteLine("(#1) {0} attempt(s) | #(2) {1} attempt(s) | (#3) {2} attempt(s) | (#4) {3} attempt(s) | (#5) {4} attempt(s)", attempts[0], attempts[1], attempts[2], attempts[3], attempts[4]);

                Console.ReadKey();
            }
