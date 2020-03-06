using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Xml.Serialization;

namespace AjaxLearning
{
    public class Helptext
    {
        public string key { get; set; }
        public string Text { get; set; }
    }
    public partial class GetHelpText : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //returning string response
            //divResult.InnerText= GetHelpTextByKey(Request["HelpTextKey"]);

            //returing Json format from server using serilize class
            //JavaScriptSerializer js = new JavaScriptSerializer();
            //string jsonString=js.Serialize(GetHelpTextByKey(Request["HelpTextKey"]));
            //Response.Write(jsonString);

            //Returning xml data
            Response.ContentType = "text/xml";
            XmlSerializer xmlSerilizer = new XmlSerializer(typeof(Helptext));
            xmlSerilizer.Serialize(Response.OutputStream, GetHelpTextByKey(Request["HelpTextKey"]));
        }
        private Helptext GetHelpTextByKey(string key)
        {

            //string helpText = string.Empty;

            //class object for json
            Helptext helpText = new Helptext();
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("spGetHelpTextByKey", con);
                cmd.CommandType = CommandType.StoredProcedure;
                SqlParameter parameter = new SqlParameter("@HelpTextKey", key);
                cmd.Parameters.Add(parameter);
                con.Open();
                helpText.Text = cmd.ExecuteScalar().ToString();
                helpText.key = key;
            }
            return helpText;
        }
    }
}