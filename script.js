{
                string fname, lname, q1R, q2R, q3R, q4R, q5R, q6R, q7R, q8R, q9R, q10R, q11R, q12R, q13R, q14R, q15R, q16R, q17R, q18R, q19R, q20R;
                int mark = 0;
                double percentage;


                string[] questions = { "How many players per team are on the field at one time for each team (full field)? \n A:11 \n B:9 \n C:13 \n D:10 \n E:9", "When was the first soccer league created? \n A:1974 \n B:1888 \n C:1997 \n D:1897 \n E:1884", "The FA (Football Association) founded on which year? \n A:1863 \n B:1867 \n C:1860 \n D:1870 \n E:1877", "A soccer game is divided into how many equal parts? \n A:3 periods  \n B:2 halves \n C:3 quarters \n D:9 innings \n E:4 periods", "Which country won the highest number of world cups? \n A:Argentina \n B:Netherlands  \n C:USA \n D:Germany \n E:Brazil", "How long is an official professionally sanctioned game? \n A:40 minutes \n B:80 minutes \n C:100 minutes \n D:90 minutes \n E:60 minutes", "How many times did Italy win the FIFA world cup? \n A:4  \n B:5 \n C:6 \n D:2 \n E:3", "In which country was the first FIFA world cup held in? \n A:Italy  \n B:Brazil \n C:Spain \n D:Germany \n E:Uruguay", "Who won the first football world cup? \n A:Germany \n B:USA \n C:Uruguay \n D:Paraguay \n E:Netherlands", "If the ball rolls out of bounds on the sideline in soccer, what is the result? \n A:goal-kick \n B:free-kick \n C:corner \n D:penalty \n E:throw-in", "Which player scored more number of goals in the FIFA world cup? \n A: Cristiano Ronaldo \n B: Andrea Pirlo \n C:Miroslav Klose \n D:Lionel Messi \n E: Arjen Robben", "In soccer, who is the only player that is allowed to use their hands in the field of play? \n A:Goalie \n B:Midfielder \n C:Forward \n D:Defender \n E:Manager", "In 2010 world cup who was the captain of Spain? \n A:David Villa \n B:Iker Casillas \n C:Carles Puyol \n D:Sergio Ramos \n E:Gerard Pique", "If an offensive player is fouled in the box, the result is a                kick. \n A:Penalty Kick \n B:Direct \n C:Corner \n D:Free-kick \n E:Indirect", "Diego Maradona played how many world cups? \n A:5 \n B:6 \n C:4 \n D:2 \n E:3", "Eng is the FIFA code of which country? \n A:England \n B:Germany \n C:Brazil \n D:Netherlands \n E:Equador", "How many teams are in the English Premier League \n A:15 \n B:25 \n C:20  \n D:19 \n E:18", "Who won the champions league of 2019? \n A:Real Madrid \n B:Bareclona FC \n C:Juventus \n D:Liverpool FC \n E:Chelsea", "How long can a goalkeeper hold onto the ball for according to the official FIFA rulebook? \n A:No Limit \n B:10 Seconds \n C:3 Seconds \n D:30 Seconds \n E:5 Seconds", "Who is known as the “King of Soccer” \n A:Pele \n B:Cristiano Ronaldo  \n C:Lionel Messi  \n D:Zinedine Zidane \n E: Arjen Robben" };
                string[] answers = { "A", "B", "A", "B", "E", "D", "A", "E", "C", "E", "C","A","B", "A", "C", "A", "C", "D", "E", "A"};
                int[] attempts = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };


                //INPUT
                Console.WriteLine("Welcome to my test!");
                Console.WriteLine("------------------------------------------------------------------------------");
                Console.WriteLine("Here are the RULES!");
                Console.WriteLine("The test has 20 questions and is out of 100");
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

                // Question 6
                Console.WriteLine("--------------QUESTION 6-----------------");
                Console.WriteLine(questions[5]);
                q6R = Console.ReadLine();

                while (q6R != answers[5])
                {
                    Console.WriteLine(questions[5]);
                    q6R = Console.ReadLine();
                    attempts[5]++;
                }
                do
                {
                    if (q6R == answers[5] && attempts[5] == 0)
                    {
                        attempts[5]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 6/6 your done!");
                    }
                    else if (q6R == answers[5] && attempts[5] == 1)
                    {
                        attempts[5]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 6/6 your done!");

                    }
                    else if (q6R == answers[5] && attempts[5] > 1)
                    {
                        attempts[5]++;
                        Console.WriteLine("Correct! | 6/6 your done!");
                    }
                } while (q6R != answers[5]);

                // Question 7
                Console.WriteLine("--------------QUESTION 7-----------------");
                Console.WriteLine(questions[6]);
                q7R = Console.ReadLine();

                while (q7R != answers[6])
                {
                    Console.WriteLine(questions[6]);
                    q7R = Console.ReadLine();
                    attempts[6]++;
                }
                do
                {
                    if (q7R == answers[6] && attempts[6] == 0)
                    {
                        attempts[6]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q7R == answers[6] && attempts[6] == 1)
                    {
                        attempts[6]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q7R == answers[6] && attempts[6] > 1)
                    {
                        attempts[6]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q7R != answers[6]);

                // Question 8
                Console.WriteLine("--------------QUESTION 8-----------------");
                Console.WriteLine(questions[7]);
                q8R = Console.ReadLine();

                while (q8R != answers[7])
                {
                    Console.WriteLine(questions[7]);
                    q8R = Console.ReadLine();
                    attempts[7]++;
                }
                do
                {
                    if (q8R == answers[7] && attempts[7] == 0)
                    {
                        attempts[7]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q8R == answers[7] && attempts[7] == 1)
                    {
                        attempts[7]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q8R == answers[7] && attempts[7] > 1)
                    {
                        attempts[7]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q8R != answers[7]);

                // Question 9
                Console.WriteLine("--------------QUESTION 9-----------------");
                Console.WriteLine(questions[8]);
                q9R = Console.ReadLine();

                while (q9R != answers[8])
                {
                    Console.WriteLine(questions[8]);
                    q9R = Console.ReadLine();
                    attempts[8]++;
                }
                do
                {
                    if (q9R == answers[8] && attempts[8] == 0)
                    {
                        attempts[8]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q9R == answers[8] && attempts[8] == 1)
                    {
                        attempts[8]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q9R == answers[8] && attempts[8] > 1)
                    {
                        attempts[8]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q9R != answers[8]);


                // Question 10
                Console.WriteLine("--------------QUESTION 10-----------------");
                Console.WriteLine(questions[9]);
                q10R = Console.ReadLine();

                while (q10R != answers[9])
                {
                    Console.WriteLine(questions[9]);
                    q10R = Console.ReadLine();
                    attempts[9]++;
                }
                do
                {
                    if (q10R == answers[9] && attempts[9] == 0)
                    {
                        attempts[9]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q10R == answers[9] && attempts[9] == 1)
                    {
                        attempts[9]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q10R == answers[9] && attempts[9] > 1)
                    {
                        attempts[9]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q10R != answers[9]);


                // Question 11
                Console.WriteLine("--------------QUESTION 11-----------------");
                Console.WriteLine(questions[10]);
                q11R = Console.ReadLine();

                while (q11R != answers[10])
                {
                    Console.WriteLine(questions[10]);
                    q11R = Console.ReadLine();
                    attempts[10]++;
                }
                do
                {
                    if (q11R == answers[10] && attempts[10] == 0)
                    {
                        attempts[10]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q11R == answers[10] && attempts[10] == 1)
                    {
                        attempts[10]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q11R == answers[10] && attempts[10] > 1)
                    {
                        attempts[10]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q11R != answers[10]);

                // Question 12
                Console.WriteLine("--------------QUESTION 12-----------------");
                Console.WriteLine(questions[11]);
                q12R = Console.ReadLine();

                while (q12R != answers[11])
                {
                    Console.WriteLine(questions[11]);
                    q12R = Console.ReadLine();
                    attempts[11]++;
                }
                do
                {
                    if (q12R == answers[11] && attempts[11] == 0)
                    {
                        attempts[11]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q12R == answers[11] && attempts[11] == 1)
                    {
                        attempts[11]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q12R == answers[11] && attempts[11] > 1)
                    {
                        attempts[11]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q12R != answers[11]);


                // Question 13
                Console.WriteLine("--------------QUESTION 13-----------------");
                Console.WriteLine(questions[12]);
                q13R = Console.ReadLine();

                while (q13R != answers[12])
                {
                    Console.WriteLine(questions[12]);
                    q13R = Console.ReadLine();
                    attempts[12]++;
                }
                do
                {
                    if (q13R == answers[12] && attempts[12] == 0)
                    {
                        attempts[12]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q13R == answers[12] && attempts[12] == 1)
                    {
                        attempts[12]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q13R == answers[12] && attempts[12] > 1)
                    {
                        attempts[12]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q13R != answers[12]);


                // Question 14
                Console.WriteLine("--------------QUESTION 14-----------------");
                Console.WriteLine(questions[13]);
                q14R = Console.ReadLine();

                while (q14R != answers[13])
                {
                    Console.WriteLine(questions[13]);
                    q14R = Console.ReadLine();
                    attempts[13]++;
                }
                do
                {
                    if (q14R == answers[13] && attempts[13] == 0)
                    {
                        attempts[13]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q14R == answers[13] && attempts[13] == 1)
                    {
                        attempts[13]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q14R == answers[13] && attempts[13] > 1)
                    {
                        attempts[13]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q14R != answers[13]);


                // Question 15
                Console.WriteLine("--------------QUESTION 15-----------------");
                Console.WriteLine(questions[14]);
                q15R = Console.ReadLine();

                while (q15R != answers[14])
                {
                    Console.WriteLine(questions[14]);
                    q15R = Console.ReadLine();
                    attempts[14]++;
                }
                do
                {
                    if (q15R == answers[14] && attempts[14] == 0)
                    {
                        attempts[14]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q15R == answers[14] && attempts[14] == 1)
                    {
                        attempts[14]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q15R == answers[14] && attempts[14] > 1)
                    {
                        attempts[14]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q15R != answers[14]);


                // Question 16
                Console.WriteLine("--------------QUESTION 16-----------------");
                Console.WriteLine(questions[15]);
                q16R = Console.ReadLine();

                while (q16R != answers[15])
                {
                    Console.WriteLine(questions[15]);
                    q16R = Console.ReadLine();
                    attempts[15]++;
                }
                do
                {
                    if (q16R == answers[15] && attempts[15] == 0)
                    {
                        attempts[15]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q16R == answers[15] && attempts[15] == 1)
                    {
                        attempts[15]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q16R == answers[15] && attempts[15] > 1)
                    {
                        attempts[15]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q16R != answers[15]);



                // Question 17
                Console.WriteLine("--------------QUESTION 17-----------------");
                Console.WriteLine(questions[16]);
                q17R = Console.ReadLine();

                while (q17R != answers[16])
                {
                    Console.WriteLine(questions[16]);
                    q17R = Console.ReadLine();
                    attempts[16]++;
                }
                do
                {
                    if (q17R == answers[16] && attempts[16] == 0)
                    {
                        attempts[16]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q17R == answers[16] && attempts[16] == 1)
                    {
                        attempts[16]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q17R == answers[16] && attempts[16] > 1)
                    {
                        attempts[16]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q17R != answers[16]);


                // Question 18
                Console.WriteLine("--------------QUESTION 18-----------------");
                Console.WriteLine(questions[17]);
                q18R = Console.ReadLine();

                while (q18R != answers[17])
                {
                    Console.WriteLine(questions[17]);
                    q18R = Console.ReadLine();
                    attempts[17]++;
                }
                do
                {
                    if (q18R == answers[17] && attempts[17] == 0)
                    {
                        attempts[17]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q18R == answers[17] && attempts[17] == 1)
                    {
                        attempts[17]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q18R == answers[17] && attempts[17] > 1)
                    {
                        attempts[17]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q18R != answers[17]);


                // Question 19
                Console.WriteLine("--------------QUESTION 19-----------------");
                Console.WriteLine(questions[18]);
                q19R = Console.ReadLine();

                while (q19R != answers[18])
                {
                    Console.WriteLine(questions[18]);
                    q19R = Console.ReadLine();
                    attempts[18]++;
                }
                do
                {
                    if (q19R == answers[18] && attempts[18] == 0)
                    {
                        attempts[18]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q19R == answers[18] && attempts[18] == 1)
                    {
                        attempts[18]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q19R == answers[18] && attempts[18] > 1)
                    {
                        attempts[18]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q19R != answers[18]);


                // Question 20
                Console.WriteLine("--------------QUESTION 20-----------------");
                Console.WriteLine(questions[19]);
                q20R = Console.ReadLine();

                while (q20R != answers[19])
                {
                    Console.WriteLine(questions[19]);
                    q20R = Console.ReadLine();
                    attempts[19]++;
                }
                do
                {
                    if (q20R == answers[19] && attempts[19] == 0)
                    {
                        attempts[19]++;
                        mark += 20;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                    else if (q20R == answers[19] && attempts[19] == 1)
                    {
                        attempts[19]++;
                        mark += 10;
                        Console.WriteLine("Correct! | 5/5 your done!");

                    }
                    else if (q20R == answers[19] && attempts[19] > 1)
                    {
                        attempts[19]++;
                        Console.WriteLine("Correct! | 5/5 your done!");
                    }
                } while (q20R != answers[19]);


                //PROCESSING
                percentage = (Convert.ToDouble(mark));


                //OUTPUT
                Console.WriteLine("------------------------FINAL-------------------------");
                Console.WriteLine("Test taken on " + DateTime.Now.ToString("dd/MM/yyyy") + " at " + DateTime.Now.ToString("hh:mm tt"));
                Console.WriteLine("firstname: {0} | lastname: {1}", fname, lname);
                Console.WriteLine("You scored {0}/100   ", mark);
                Console.WriteLine("You got {0}%", percentage);
                Console.WriteLine("(#1) {0} attempt(s) | #(2) {1} attempt(s) | (#3) {2} attempt(s) | (#4) {3} attempt(s) | (#5) {4} attempt(s)", attempts[0], attempts[1], attempts[2], attempts[3], attempts[4]);

                Console.ReadKey();
            }
