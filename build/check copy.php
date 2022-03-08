<?php
include_once('inc/phpCAS-1.3.6/CAS.php');

/**
* @return string 
* Returns button, link, or form for login
*/
function getCalNetLoginHTML($Screen){
    print('<form method="get" 
        action="https://' . AUTHENTICATION_URL .'/cas/login">
        <input name="service" value="'.ScreenURL($Screen, FALSE, array('ACTION'=>'LOGIN')).'" type="hidden" >
        <input type="submit" value="Login" class="AdminTablelessButton">
        </form>	');	
}

/**
* @return string 
* Returns button, link, or form for login
*/
function getCalNetLoginURL($Screen){	
    if ($_REQUEST['sn'] != '')
    {	
        return 'https://' . AUTHENTICATION_URL .'/cas/login' .
            '?service=' . urlencode(ScreenURL($Screen, FALSE, array('sn'=>$_REQUEST['sn'],'ACTION'=>'LOGIN')));
    }
    else
    {		
        return 'https://' . AUTHENTICATION_URL .'/cas/login' .
            '?service=' . urlencode(ScreenURL($Screen, FALSE, array('ACTION'=>'LOGIN')));
    }
}


/**
* @return string 
* Returns button, link, or form for login
*/
function getCalNetRegisterHTML($Screen){
    print('<form method="get" 
        action="https://' . AUTHENTICATION_URL .'/cas/login">
        <input name="service" value="'.ScreenURL($Screen, FALSE, array('ACTION'=>'LOGIN')).'" type="hidden" >
        <input type="submit" value="Register" class="AdminTablelessButton">
        </form>	');	
}

/**
* @return array
* Returns array or false on error
*/
function getCalNetLDAPResultByFilter($filter, $sizelimit=50, $timelimit=600){
	
	// Set LDAP fields to extract with search.
	$attributes = array("uid", "cn", "displayname", "telephonenumber", "mail");
	
	// Event create and submit forms do not use multiple LDAP selection form.
	if ($_REQUEST["SCREEN"] == "event_create" || $_REQUEST["SCREEN"] == "submit")
	{
		$sizelimit = 2;
	}

	if(!isset($Session["LDAP"]->Connection))
	{
		$Session["LDAP"]->Connection = ldap_connect(LDAP_HOST);
		$Session["LDAP"]->Bind = ldap_bind($Session["LDAP"]->Connection, 'uid=pub-affairs-person-lookup,ou=applications,dc=berkeley,dc=edu', 'lkGd8ToVTxU4a6qa');
	}

	if($Session["LDAP"]->Connection)
	{
		$sr = @ldap_search($Session["LDAP"]->Connection, LDAP_DN, $filter, $attributes, 0, $sizelimit, $timelimit); 		
		$ldapResult = ldap_get_entries($Session["LDAP"]->Connection, $sr);
	}
	else
	{
		$ldapResult = FALSE;
	}
	return($ldapResult);
}

function getCalNetLDAPResultByUID($uid){
	$ldapResult = getCalNetLDAPResultByFilter("uid=".$uid);
	
	/**
	* @todo put in code to use cache if ldap is un available
	*/
	return($ldapResult);
}

if(isset($Session['Identification']['CalNetID']))
	{
		if(User::IDExists($Session['Identification']['CalNetID'],'Any'))
		{
			$u = User::getByID($Session['Identification']['CalNetID'],'Any');
		}
		print '<form method="post" ' .
			'action="' .
			ScreenURL('login', TRUE, array('ACTION'=>'LOGOUT')) .
			'">' .
			'<input type="submit" value="Logout" class="AdminTablelessButton"> ' .
			'</form>';
		if($u->AccountStatus == 'Active')
		{
			print('<br>You are already logged in.<br>Access the <a href="event_manager">Event Manager</a>.');
		}
		else
		{
			print('<br>You must register and receive an email stating your account is active
			before you can access any application functionality.<br>Return to the <a href="index.php/admin_register">Registration screen</a>.');
	  	}
	}
	else
	{
		print getCalNetLoginHTML($_REQUEST['INIT_SCREEN']);
	}

?>