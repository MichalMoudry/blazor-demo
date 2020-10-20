using System;

namespace demo.Models
{
    public class EmailContent
    {
        public string EmailID { get; set; }

        public string Title { get; set; }
        
        public string To { get; set; }

        public string From { get; set; }

        public string Content { get; set; }

        public string Status { get; set; }

        public DateTime DateSend { get; set; }
    }
}