using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Configuration;

namespace AjaxLearning
{
    /// <summary>
    /// Summary description for StudentHandler
    /// </summary>
    public class StudentHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string term = context.Request["term"] ?? "";
            List<string> listStudentNames = new List<string>();
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("spGETStudentsNames", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter()
                {
                    ParameterName = "@Term",
                    Value = term
                });
                con.Open();
                SqlDataReader rdr=  cmd.ExecuteReader();
                while(rdr.Read())
                {
                    listStudentNames.Add(rdr["Name"].ToString()) ;
                }
                JavaScriptSerializer js = new JavaScriptSerializer();
                context.Response.Write(js.Serialize(listStudentNames));
            }
          
        
    }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}