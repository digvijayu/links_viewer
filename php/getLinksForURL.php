<?php

function get_title($url){
  $str = file_get_contents($url);
  if(strlen($str)>0){
    $str = trim(preg_replace('/\s+/', ' ', $str)); // supports line breaks inside <title>
    preg_match("/\<title\>(.*)\<\/title\>/i",$str,$title); // ignore case
    return $title[1];
  }
}

function isexternal($url) {
    // FOO...

    // Test if link is internal/external
    if(strpos($url,'sourceforge.net') !== false || strpos($url,"/") === '0')
    {
         return true;
    }
    else
    {
         return false;
    }
}

$html = file_get_contents('http://sourceforge.net/projects/simplehtmldom');
//Create a new DOM document
$dom = new DOMDocument;

//Parse the HTML. The @ is used to suppress any parsing errors
//that will be thrown if the $html string isn't valid XHTML.
@$dom->loadHTML($html);

//Get all links. You could also use any other tag name here,
//like 'img' or 'table', to extract other tags.
$links = $dom->getElementsByTagName('a');

$arr = array();
//Iterate over the extracted links and display their URLs
foreach ($links as $link){
    //Extract and show the "href" attribute.
         //echo $link->nodeValue;
    $url = $link->getAttribute('href');
    /*$title = get_title($url);
    array_push($arr, $title);*/
    $urlArr = array();
    $urlArr['isExternal'] = isexternal($url);
    $urlArr['url'] = $url;
    array_push($arr, $urlArr);
}

//header('Content-Type: application/json');
echo json_encode($arr);

?>