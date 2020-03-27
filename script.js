{
                string fname, lname, q1R, q2R, q3R, q4R, q5R, q6R, q7R, q8R, q9R, q10R, q11R, q12R, q13R, q14R, q15R, q16R, q17R, q18R, q19R, q20R, noMark = "E";
                int mark = 0,correctResponses = 0, totalQuestions = 20, outOf = 80 ,numOfCanidates;
                double percentage;


                string[] questions = { "How many players per team are on the field at one time for each team (full field)? \n A:11 \n B:9 \n C:13 \n D:10 \n E:No answer(0 marks)",
                    "When was the first soccer league created? \n A:1974 \n B:1888 \n C:1997 \n D:1897 \n E:No answer(0 marks)",
                    "The FA (Football Association) founded on which year? \n A:1863 \n B:1867 \n C:1860 \n D:1870 \n E:No answer(0 marks)",
                    "A soccer game is divided into how many equal parts? \n A:3 periods  \n B:2 halves \n C:3 quarters \n D:9 innings \n E:No answer(0 marks)",
                    "Which country won the highest number of world cups? \n A:Argentina \n B:Brazil  \n C:USA \n D:Germany \n E:No answer(0 marks)",
                    "How long is an official professionally sanctioned game? \n A:40 minutes \n B:80 minutes \n C:100 minutes \n D:90 minutes \n E:No answer(0 marks)",
                    "How many times did Italy win the FIFA world cup? \n A:4  \n B:5 \n C:6 \n D:2 \n E:No answer(0 marks)",
                    "In which country was the first FIFA world cup held in? \n A:Uruguay  \n B:Brazil \n C:Spain \n D:Germany \n E:No answer(0 marks)",
                    "Who won the first football world cup? \n A:Germany \n B:USA \n C:Uruguay \n D:Paraguay \n E:No answer(0 marks)",
                    "If the ball rolls out of bounds on the sideline in soccer, what is the result? \n A:goal-kick \n B:throw-in \n C:corner \n D:penalty \n E:No answer(0 marks)throw-in",
                    "Which player scored more number of goals in the FIFA world cup? \n A: Cristiano Ronaldo \n B: Andrea Pirlo \n C:Miroslav Klose \n D:Lionel Messi \n E:No answer(0 marks) ",
                    "In soccer, who is the only player that is allowed to use their hands in the field of play? \n A:Goalie \n B:Midfielder \n C:Forward \n D:Defender \n E:No answer(0 marks)",
                    "In 2010 world cup who was the captain of Spain? \n A:David Villa \n B:Iker Casillas \n C:Carles Puyol \n D:Sergio Ramos \n E:No answer(0 marks)",
                    "If an offensive player is fouled in the box, the result is a                kick. \n A:Penalty Kick \n B:Direct \n C:Corner \n D:Free-kick \n E:No answer(0 marks)",
                    "Diego Maradona played how many world cups? \n A:5 \n B:6 \n C:4 \n D:2 \n E:No answer(0 marks)",
                    "Eng is the FIFA code of which country? \n A:England \n B:Germany \n C:Brazil \n D:Netherlands \n E:No answer(0 marks)",
                    "How many teams are in the English Premier League \n A:15 \n B:25 \n C:20  \n D:19 \n E:No answer(0 marks)",
                    "Who won the champions league of 2019? \n A:Real Madrid \n B:Bareclona FC \n C:Juventus \n D:Liverpool FC \n E:No answer(0 marks)",
                    "How long can a goalkeeper hold onto the ball for according to the official FIFA rulebook? \n A:No Limit \n B:10 Seconds \n C:3 Seconds \n D:5 Seconds \n E:No answer(0 marks)",
                    "Who is known as the “King of Soccer” \n A:Pele \n B:Cristiano Ronaldo  \n C:Lionel Messi  \n D:Zinedine Zidane \n E:No answer(0 marks) " };
                string[] answers = { "A", "B", "A", "B", "B", "D", "A", "A", "C", "B", "C", "A", "B", "A", "C", "A", "C", "D", "D", "A" };
                


                //INPUT
                Console.WriteLine("Welcome to my test!");
                Console.WriteLine("------------------------------------------------------------------------------");
                Console.WriteLine("Here are the RULES!");
                Console.WriteLine("The test has 20 questions and is out of 80");
                Console.WriteLine("Every question correctly answered on the FIRST attempt will receive 4 marks");
                Console.WriteLine("Any incorrect attempt will receive -1 marks.");
                Console.WriteLine("Any Skipped will receive 0 marks");
                Console.WriteLine("You need to answer the question correctly to move on to the next question!");
                Console.WriteLine("------------------------------------------------------------------------------");

                Console.WriteLine("How many canidates will be taking the test");
                numOfCanidates = Convert.ToInt32(Console.ReadLine());


                for (int i = 0; i < numOfCanidates; i++)
                {
                    Console.Write("Please enter your first name:");
                    fname = Console.ReadLine();
                    Console.Write("Please enter your last name:");
                    lname = Console.ReadLine();

                    // Question 1
                    Console.WriteLine("--------------QUESTION 1-----------------");
                    Console.WriteLine(questions[0]);
                    q1R = Console.ReadLine();

                        while (q1R != answers[0] && q1R != noMark && q1R == null)
                        {
                            Console.WriteLine(questions[0]);
                            q1R = Console.ReadLine();
                            
                        }
                        do
                        {
                            if (q1R == answers[0])
                            {
                                mark += 4;
                                correctResponses++;
                                Console.WriteLine("Correct! +{0}/{1} {2}/{3} ",mark, outOf, correctResponses,totalQuestions );

                            }
                            else if (q1R != answers[0] && q1R != noMark)
                            {

                                mark--; ;
                                Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark,outOf ,correctResponses, totalQuestions);

                            }

                            if (q1R == noMark)
                            {
                                Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                            }
                        } while (q1R != answers[0] && q1R != noMark && q1R == null);
                    
                    Console.WriteLine("--------------QUESTION 2-----------------");
                    // Question 2
                    Console.WriteLine(questions[1]);
                    q2R = Console.ReadLine();

                    while (q2R != answers[1] && q2R != noMark && q2R == null)
                    {
                        Console.WriteLine(questions[1]);
                        q2R = Console.ReadLine();
                    }
                    do
                    {
                        if (q2R == answers[1])
                        {
                                mark += 4;
                                correctResponses++;
                                Console.WriteLine("Correct! +{0} {1}/{2} ",mark,correctResponses,totalQuestions );
                        }
                        else if (q2R != answers[1] && q1R != noMark)
                            {

                                mark--; ;
                                Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark,outOf ,correctResponses, totalQuestions);

                            }
                        if (q2R == noMark)
                            {
                                Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                            }
                    } while (q2R != answers[1] && q2R != noMark && q2R == null);

                    
                    Console.WriteLine("--------------QUESTION 3-----------------");
                    // Question 3
                    Console.WriteLine(questions[2]);
                    q3R = Console.ReadLine();


                    while (q3R != answers[2] && q3R != noMark && q3R == null)
                    {
                        Console.WriteLine(questions[1]);
                        q3R = Console.ReadLine();
                    }
                    do
                    {
                        if (q3R == answers[2])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q3R != answers[2] && q3R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q3R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q3R != answers[1] && q3R != noMark && q3R == null);

                    
                    // Question 4
                    Console.WriteLine("--------------QUESTION 4-----------------");
                    Console.WriteLine(questions[3]);
                    q4R = Console.ReadLine();

                    while (q4R != answers[3] && q4R != noMark && q4R == null)
                    {
                        Console.WriteLine(questions[3]);
                        q4R = Console.ReadLine();
                    }
                    do
                    {
                        if (q4R == answers[3])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q4R != answers[3] && q4R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q4R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q4R != answers[3] && q4R != noMark && q4R == null);

                    
                    // Question 5
                    Console.WriteLine("--------------QUESTION 5-----------------");
                    Console.WriteLine(questions[4]);
                    q5R = Console.ReadLine();

                    while (q5R != answers[4] && q5R != noMark && q5R == null)
                    {
                        Console.WriteLine(questions[4]);
                        q5R = Console.ReadLine();
                    }
                    do
                    {
                        if (q5R == answers[4])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q5R != answers[4] && q5R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q5R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q5R != answers[3] && q5R != noMark && q5R == null);

                    // Question 6
                    Console.WriteLine("--------------QUESTION 6-----------------");
                    Console.WriteLine(questions[5]);
                    q6R = Console.ReadLine();

                    while (q6R != answers[5] && q6R != noMark && q6R == null)
                    {
                        Console.WriteLine(questions[5]);
                        q6R = Console.ReadLine();
                    }
                    do
                    {
                        if (q6R == answers[5])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q6R != answers[5] && q6R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q6R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q6R != answers[5] && q6R != noMark && q6R == null);

                    // Question 7
                    Console.WriteLine("--------------QUESTION 7-----------------");
                    Console.WriteLine(questions[6]);
                    q7R = Console.ReadLine();

                    while (q7R != answers[6] && q7R != noMark && q7R == null)
                    {
                        Console.WriteLine(questions[6]);
                        q7R = Console.ReadLine();
                    }
                    do
                    {
                        if (q7R == answers[6])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q7R != answers[6] && q7R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q7R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q7R != answers[6] && q7R != noMark && q7R == null);

                    // Question 8
                    Console.WriteLine("--------------QUESTION 8-----------------");
                    Console.WriteLine(questions[7]);
                    q8R = Console.ReadLine();

                    while (q8R != answers[7] && q8R != noMark && q8R == null)
                    {
                        Console.WriteLine(questions[7]);
                        q7R = Console.ReadLine();
                    }
                    do
                    {
                        if (q8R == answers[7])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q7R != answers[7] && q8R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q8R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q8R != answers[7] && q8R != noMark && q8R == null);

                    // Question 9
                    Console.WriteLine("--------------QUESTION 9-----------------");
                    Console.WriteLine(questions[8]);
                    q9R = Console.ReadLine();

                    while (q9R != answers[8] && q8R != noMark && q9R == null)
                    {
                        Console.WriteLine(questions[8]);
                        q9R = Console.ReadLine();
                    }
                    do
                    {
                        if (q9R == answers[8])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q9R != answers[8] && q9R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q9R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q9R != answers[8] && q9R != noMark && q9R == null);


                    // Question 10
                    Console.WriteLine("--------------QUESTION 10-----------------");
                    Console.WriteLine(questions[9]);
                    q10R = Console.ReadLine();

                    while (q10R != answers[9] && q10R != noMark && q10R == null)
                    {
                        Console.WriteLine(questions[9]);
                        q10R = Console.ReadLine();
                    }
                    do
                    {
                        if (q10R == answers[9])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q10R != answers[9] && q10R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q10R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q10R != answers[9] && q10R != noMark && q10R == null);


                    // Question 11
                    Console.WriteLine("--------------QUESTION 11-----------------");
                    Console.WriteLine(questions[10]);
                    q11R = Console.ReadLine();

                    while (q11R != answers[10] && q11R != noMark && q11R == null)
                    {
                        Console.WriteLine(questions[10]);
                        q11R = Console.ReadLine();
                    }
                    do
                    {
                        if (q11R == answers[10])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q11R != answers[10] && q11R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q11R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q11R != answers[10] && q11R != noMark && q11R == null);

                    // Question 12
                    Console.WriteLine("--------------QUESTION 12-----------------");
                    Console.WriteLine(questions[11]);
                    q12R = Console.ReadLine();

                    while (q12R != answers[11] && q12R != noMark && q12R == null)
                    {
                        Console.WriteLine(questions[11]);
                        q12R = Console.ReadLine();
                    }
                    do
                    {
                        if (q12R == answers[11])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q12R != answers[11] && q12R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q12R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q12R != answers[11] && q12R != noMark && q12R == null);


                    // Question 13
                    Console.WriteLine("--------------QUESTION 13-----------------");
                    Console.WriteLine(questions[12]);
                    q13R = Console.ReadLine();

                    while (q13R != answers[12] && q13R != noMark && q13R == null)
                    {
                        Console.WriteLine(questions[12]);
                        q13R = Console.ReadLine();
                    }
                    do
                    {
                        if (q13R == answers[12])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q13R != answers[12] && q13R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q13R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q13R != answers[12] && q13R != noMark && q13R == null);


                    // Question 14
                    Console.WriteLine("--------------QUESTION 14-----------------");
                    Console.WriteLine(questions[13]);
                    q14R = Console.ReadLine();

                    while (q14R != answers[13] && q14R != noMark && q14R == null)
                    {
                        Console.WriteLine(questions[13]);
                        q14R = Console.ReadLine();
                    }
                    do
                    {
                        if (q14R == answers[13])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q14R != answers[13] && q14R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q14R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q14R != answers[13] && q14R != noMark && q14R == null);


                    // Question 15
                    Console.WriteLine("--------------QUESTION 15-----------------");
                    Console.WriteLine(questions[14]);
                    q15R = Console.ReadLine();

                    while (q15R != answers[14] && q15R != noMark && q15R == null)
                    {
                        Console.WriteLine(questions[14]);
                        q15R = Console.ReadLine();
                    }
                    do
                    {
                        if (q15R == answers[14])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q15R != answers[14] && q15R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q15R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q15R != answers[14] && q15R != noMark && q15R == null);


                    // Question 16
                    Console.WriteLine("--------------QUESTION 16-----------------");
                    Console.WriteLine(questions[15]);
                    q16R = Console.ReadLine();

                    while (q16R != answers[15] && q16R != noMark && q16R == null)
                    {
                        Console.WriteLine(questions[15]);
                        q16R = Console.ReadLine();
                    }
                    do
                    {
                        if (q16R == answers[15])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q16R != answers[15] && q16R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q16R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q16R != answers[15] && q16R != noMark && q16R == null);



                    // Question 17
                    Console.WriteLine("--------------QUESTION 17-----------------");
                    Console.WriteLine(questions[16]);
                    q17R = Console.ReadLine();

                    while (q17R != answers[16] && q17R != noMark && q17R == null)
                    {
                        Console.WriteLine(questions[16]);
                        q17R = Console.ReadLine();
                    }
                    do
                    {
                        if (q17R == answers[16])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q17R != answers[16] && q17R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q17R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q17R != answers[16] && q17R != noMark && q17R == null);


                    // Question 18
                    Console.WriteLine("--------------QUESTION 18-----------------");
                    Console.WriteLine(questions[17]);
                    q18R = Console.ReadLine();

                    while (q18R != answers[17] && q18R != noMark && q18R == null)
                    {
                        Console.WriteLine(questions[17]);
                        q18R = Console.ReadLine();
                    }
                    do
                    {
                        if (q18R == answers[17])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q18R != answers[17] && q18R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q18R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q18R != answers[17] && q18R != noMark && q18R == null);


                    // Question 19
                    Console.WriteLine("--------------QUESTION 19-----------------");
                    Console.WriteLine(questions[18]);
                    q19R = Console.ReadLine();

                    while (q19R != answers[18] && q19R != noMark && q19R == null)
                    {
                        Console.WriteLine(questions[18]);
                        q19R = Console.ReadLine();
                    }
                    do
                    {
                        if (q19R == answers[18])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q19R != answers[18] && q19R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q19R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q19R != answers[18] && q19R != noMark && q19R == null);


                    // Question 20
                    Console.WriteLine("--------------QUESTION 20-----------------");
                    Console.WriteLine(questions[19]);
                    q20R = Console.ReadLine();

                    while (q20R != answers[19] && q20R != noMark && q20R == null)
                    {
                        Console.WriteLine(questions[19]);
                        q19R = Console.ReadLine();
                    }
                    do
                    {
                        if (q20R == answers[19])
                        {
                            mark += 4;
                            correctResponses++;
                            Console.WriteLine("Correct! +{0} {1}/{2} ", mark, correctResponses, totalQuestions);
                        }
                        else if (q20R != answers[19] && q20R != noMark)
                        {

                            mark--; ;
                            Console.WriteLine("incorrect! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);

                        }
                        if (q19R == noMark)
                        {
                            Console.WriteLine("Skipped! {0}/{1} {2}/{3} ", mark, outOf, correctResponses, totalQuestions);
                        }
                    } while (q20R != answers[19] && q20R != noMark && q20R == null);


                    //PROCESSING
                    percentage = (Convert.ToDouble(mark));


                    //OUTPUT
                    Console.WriteLine("------------------------FINAL-------------------------");
                    Console.WriteLine("Test taken on " + DateTime.Now.ToString("dd/MM/yyyy") + " at " + DateTime.Now.ToString("hh:mm tt"));
                    Console.WriteLine("firstname: {0} | lastname: {1}", fname, lname);
                    Console.WriteLine("You scored {0}/80   ", mark);
                    Console.WriteLine("You got {0}%", percentage);
                    Console.WriteLine("-----------------------------------------------------\n");
                }

                
                    Console.ReadKey();
                }
