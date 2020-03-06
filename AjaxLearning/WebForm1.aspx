<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="AjaxLearning.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

   <%--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.js"></script>--%>
    <script src="jquery-3.4.1.js"></script>
    <script src="jquery-ui.js"></script>
    <link href="jquery-ui.css" rel="stylesheet" /> 
    <script src="ajaxscript.js"></script>
    <style>
        .ui-menu{
            width:140px;
        }
    </style>
</head>
<body>
   
    <form id="form1" runat="server">
         <ul id="menu">
        <li><span ></span>USA
            <ul>
                <li>Virgina</li>
                <li>MaryLand</li>

            </ul>
        </li>
        <li>Pakistan
            <ul>
                <li>AP</li>
                <li class="ui-state-disabled">MP</li>
                <li>Karnatka
                    <ul>
                        <li>Banglore</li>
                        <li>Manglore</li>
                        <li>Mysore</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>UK</li>
        <li>Australia</li>
    </ul >
    <%-- Auto Complete --%>
        <div>
      Student Names:
     <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
    </div>
    </form>
</body>
</html>
