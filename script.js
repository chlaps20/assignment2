{
            string fname, lname, q1R, q2R, q3R, q4R, q5R;
            int mark = 0;
            double percentage;


            string[] questions = { "What sport do EPL players play? ( Lacrosse : Soccer )", "Which one of these music artist is Canadian? ( Drake : Russ )", "Where is Cristiano Ronaldo's from? ( Portgual : Argentina )", "Which spot on the podium did the Canadian Junior Hockey team get? ( Bronze : Gold )", "Who won the super bowl in 2019? ( Patriots : LA Rams )" };
            string[] answers = { "Soccer", "Drake", "Portugal", "Gold", "Patriots" };
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
