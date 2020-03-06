using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace AjaxLearning
{
    /// <summary>
    /// Summary description for EmployeeService2
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class EmployeeService2 : System.Web.Services.WebService
    {

        //    [WebMethod]
        //    public void AddEmployee(Employee emp)
        //    {

        //        string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
        //        using (SqlConnection con = new SqlConnection(cs))
        //        {
        //            SqlCommand cmd = new SqlCommand("spInsertEmployee", con);
        //            cmd.CommandType = System.Data.CommandType.StoredProcedure;
        //            cmd.Parameters.Add(new SqlParameter()
        //            {
        //                ParameterName = "@Name",
        //                Value=emp.Name
        //            });
        //            cmd.Parameters.Add(new SqlParameter()
        //            {
        //                ParameterName = "@Gender",
        //                Value = emp.Gender
        //            });
        //            cmd.Parameters.Add(new SqlParameter()
        //            {
        //                ParameterName = "@Salary",
        //                Value = emp.Gender
        //            });
        //            con.Open();
        //            cmd.ExecuteNonQuery();

        //        }

        //    }
        //}
    }
}

